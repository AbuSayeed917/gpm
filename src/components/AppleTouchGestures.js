import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Apple-style touch gesture handler with precise control
export const useAppleTouchGestures = ({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onTap,
  onDoubleTap,
  onLongPress,
  onPinch,
  swipeThreshold = 50,
  velocityThreshold = 500,
  longPressDelay = 500,
  doubleTapDelay = 300,
  enabled = true,
}) => {
  const [gestureState, setGestureState] = useState({
    isDragging: false,
    isLongPressing: false,
    startTime: null,
    lastTapTime: null,
    tapCount: 0,
  });

  const longPressTimer = useRef(null);
  const doubleTapTimer = useRef(null);

  const handlePanStart = useCallback(
    (event, info) => {
      if (!enabled) return;

      setGestureState((prev) => ({
        ...prev,
        isDragging: true,
        startTime: Date.now(),
      }));

      // Start long press timer
      if (onLongPress) {
        longPressTimer.current = setTimeout(() => {
          setGestureState((prev) => ({ ...prev, isLongPressing: true }));
          onLongPress(event, info);
        }, longPressDelay);
      }
    },
    [enabled, onLongPress, longPressDelay]
  );

  const handlePan = useCallback(
    (event, info) => {
      if (!enabled || gestureState.isLongPressing) return;

      // Cancel long press if user moves
      if (longPressTimer.current && (Math.abs(info.delta.x) > 10 || Math.abs(info.delta.y) > 10)) {
        clearTimeout(longPressTimer.current);
        longPressTimer.current = null;
      }
    },
    [enabled, gestureState.isLongPressing]
  );

  const handlePanEnd = useCallback(
    (event, info) => {
      if (!enabled) return;

      const { offset, velocity } = info;
      const distance = Math.sqrt(offset.x ** 2 + offset.y ** 2);
      const velocityMagnitude = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);

      // Clear timers
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
        longPressTimer.current = null;
      }

      // Reset gesture state
      setGestureState((prev) => ({
        ...prev,
        isDragging: false,
        isLongPressing: false,
        startTime: null,
      }));

      // Handle swipe gestures
      if (distance > swipeThreshold || velocityMagnitude > velocityThreshold) {
        const absX = Math.abs(offset.x);
        const absY = Math.abs(offset.y);

        if (absX > absY) {
          // Horizontal swipe
          if (offset.x > 0) {
            onSwipeRight?.(event, info);
          } else {
            onSwipeLeft?.(event, info);
          }
        } else {
          // Vertical swipe
          if (offset.y > 0) {
            onSwipeDown?.(event, info);
          } else {
            onSwipeUp?.(event, info);
          }
        }
      } else if (distance < 10 && !gestureState.isLongPressing) {
        // Handle tap
        const currentTime = Date.now();

        if (gestureState.lastTapTime && currentTime - gestureState.lastTapTime < doubleTapDelay) {
          // Double tap
          if (doubleTapTimer.current) {
            clearTimeout(doubleTapTimer.current);
            doubleTapTimer.current = null;
          }
          setGestureState((prev) => ({ ...prev, tapCount: 0, lastTapTime: null }));
          onDoubleTap?.(event, info);
        } else {
          // Single tap (with delay to check for double tap)
          setGestureState((prev) => ({
            ...prev,
            tapCount: prev.tapCount + 1,
            lastTapTime: currentTime,
          }));

          if (doubleTapTimer.current) {
            clearTimeout(doubleTapTimer.current);
          }

          doubleTapTimer.current = setTimeout(() => {
            onTap?.(event, info);
            setGestureState((prev) => ({ ...prev, tapCount: 0, lastTapTime: null }));
          }, doubleTapDelay);
        }
      }
    },
    [
      enabled,
      swipeThreshold,
      velocityThreshold,
      doubleTapDelay,
      gestureState.isLongPressing,
      gestureState.lastTapTime,
      onSwipeLeft,
      onSwipeRight,
      onSwipeUp,
      onSwipeDown,
      onTap,
      onDoubleTap,
    ]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
      }
      if (doubleTapTimer.current) {
        clearTimeout(doubleTapTimer.current);
      }
    };
  }, []);

  return {
    onPanStart: handlePanStart,
    onPan: handlePan,
    onPanEnd: handlePanEnd,
    gestureState,
  };
};

// Apple-style swipeable card component
export const AppleSwipeableCard = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  swipeThreshold = 100,
  snapBack = true,
  deleteOnSwipe = false,
  className = '',
  style = {},
  ...props
}) => {
  const controls = useAnimation();
  const [isRemoved, setIsRemoved] = useState(false);

  const gestures = useAppleTouchGestures({
    onSwipeLeft: (event, info) => {
      if (deleteOnSwipe) {
        controls
          .start({
            x: -window.innerWidth,
            opacity: 0,
            transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
          })
          .then(() => setIsRemoved(true));
      } else if (snapBack) {
        controls.start({
          x: 0,
          transition: { type: 'spring', stiffness: 400, damping: 30 },
        });
      }
      onSwipeLeft?.(event, info);
    },
    onSwipeRight: (event, info) => {
      if (deleteOnSwipe) {
        controls
          .start({
            x: window.innerWidth,
            opacity: 0,
            transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
          })
          .then(() => setIsRemoved(true));
      } else if (snapBack) {
        controls.start({
          x: 0,
          transition: { type: 'spring', stiffness: 400, damping: 30 },
        });
      }
      onSwipeRight?.(event, info);
    },
    onSwipeUp: (event, info) => {
      if (snapBack) {
        controls.start({
          y: 0,
          transition: { type: 'spring', stiffness: 400, damping: 30 },
        });
      }
      onSwipeUp?.(event, info);
    },
    onSwipeDown: (event, info) => {
      if (snapBack) {
        controls.start({
          y: 0,
          transition: { type: 'spring', stiffness: 400, damping: 30 },
        });
      }
      onSwipeDown?.(event, info);
    },
    swipeThreshold,
  });

  if (isRemoved) return null;

  return (
    <motion.div
      className={`apple-swipeable-card ${className}`}
      style={{
        touchAction: 'pan-y',
        cursor: 'grab',
        ...style,
      }}
      animate={controls}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      whileDrag={{
        cursor: 'grabbing',
        scale: 1.02,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
        zIndex: 1000,
      }}
      {...gestures}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Apple-style carousel with touch gestures
export const AppleCarousel = ({
  items = [],
  autoPlay = false,
  autoPlayInterval = 5000,
  showIndicators = true,
  showControls = true,
  infiniteLoop = true,
  className = '',
  style = {},
  onSlideChange,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const controls = useAnimation();
  const autoPlayTimer = useRef(null);

  const totalItems = items.length;

  const goToSlide = useCallback(
    (index) => {
      if (index < 0) {
        setCurrentIndex(infiniteLoop ? totalItems - 1 : 0);
      } else if (index >= totalItems) {
        setCurrentIndex(infiniteLoop ? 0 : totalItems - 1);
      } else {
        setCurrentIndex(index);
      }
      onSlideChange?.(index);
    },
    [totalItems, infiniteLoop, onSlideChange]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto play functionality
  useEffect(() => {
    if (isAutoPlaying && totalItems > 1) {
      autoPlayTimer.current = setInterval(nextSlide, autoPlayInterval);
      return () => {
        if (autoPlayTimer.current) {
          clearInterval(autoPlayTimer.current);
        }
      };
    }
  }, [isAutoPlaying, nextSlide, autoPlayInterval, totalItems]);

  const gestures = useAppleTouchGestures({
    onSwipeLeft: () => nextSlide(),
    onSwipeRight: () => prevSlide(),
    onTap: () => {
      setIsAutoPlaying(!isAutoPlaying);
    },
    swipeThreshold: 50,
    velocityThreshold: 300,
  });

  useEffect(() => {
    controls.start({
      x: `-${currentIndex * 100}%`,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    });
  }, [currentIndex, controls]);

  return (
    <div
      className={`apple-carousel ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        ...style,
      }}
      {...props}
    >
      <motion.div
        style={{
          display: 'flex',
          width: `${totalItems * 100}%`,
          height: '100%',
        }}
        animate={controls}
        {...gestures}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 100%',
              width: `${100 / totalItems}%`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {item}
          </div>
        ))}
      </motion.div>

      {/* Indicators */}
      {showIndicators && totalItems > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            zIndex: 10,
          }}
        >
          {items.map((_, index) => (
            <motion.button
              key={index}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              animate={{
                backgroundColor: index === currentIndex ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                scale: index === currentIndex ? 1.2 : 1,
              }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

      {/* Controls */}
      {showControls && totalItems > 1 && (
        <>
          <motion.button
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '18px',
              zIndex: 10,
            }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
          >
            ‹
          </motion.button>

          <motion.button
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '18px',
              zIndex: 10,
            }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
          >
            ›
          </motion.button>
        </>
      )}
    </div>
  );
};

// Apple-style scroll controller with momentum and elastic bounce
export const useAppleScrollController = ({
  onScrollStart,
  onScrollEnd,
  onScrollUp,
  onScrollDown,
  momentumDeceleration = 0.95,
  elasticBounce = true,
  snapPoints = [],
  snapThreshold = 50,
}) => {
  const [scrollState, setScrollState] = useState({
    isScrolling: false,
    velocity: 0,
    lastPosition: 0,
    momentum: 0,
  });

  const momentumTimer = useRef(null);

  const handleScroll = useCallback(
    (event) => {
      const currentPosition = event.target.scrollTop;
      const deltaY = currentPosition - scrollState.lastPosition;

      setScrollState((prev) => ({
        ...prev,
        isScrolling: true,
        velocity: deltaY,
        lastPosition: currentPosition,
        momentum: prev.momentum + deltaY * 0.1,
      }));

      if (deltaY > 0) {
        onScrollDown?.(event, { velocity: deltaY, position: currentPosition });
      } else if (deltaY < 0) {
        onScrollUp?.(event, { velocity: Math.abs(deltaY), position: currentPosition });
      }

      onScrollStart?.(event, { velocity: deltaY, position: currentPosition });

      // Clear existing momentum timer
      if (momentumTimer.current) {
        clearTimeout(momentumTimer.current);
      }

      // Set new momentum timer
      momentumTimer.current = setTimeout(() => {
        setScrollState((prev) => ({ ...prev, isScrolling: false, momentum: 0 }));
        onScrollEnd?.(event, { position: currentPosition });
      }, 150);
    },
    [scrollState.lastPosition, onScrollStart, onScrollEnd, onScrollUp, onScrollDown]
  );

  return {
    onScroll: handleScroll,
    scrollState,
  };
};

// Apple-style pull-to-refresh component
export const ApplePullToRefresh = ({
  children,
  onRefresh,
  refreshThreshold = 100,
  isRefreshing = false,
  className = '',
  style = {},
  ...props
}) => {
  const [pullDistance, setPullDistance] = useState(0);
  const [canRefresh, setCanRefresh] = useState(false);
  const controls = useAnimation();

  const gestures = useAppleTouchGestures({
    onSwipeDown: (event, info) => {
      const distance = Math.abs(info.offset.y);

      if (distance > refreshThreshold && !isRefreshing) {
        setCanRefresh(true);
        onRefresh?.();
      }

      setPullDistance(0);
      controls.start({ y: 0 });
    },
    swipeThreshold: refreshThreshold / 2,
  });

  const handlePan = (event, info) => {
    if (info.offset.y > 0 && window.scrollY === 0) {
      const distance = Math.min(info.offset.y, refreshThreshold * 1.5);
      setPullDistance(distance);
      setCanRefresh(distance > refreshThreshold);

      controls.start({
        y: distance * 0.5, // Elastic effect
        transition: { type: 'spring', stiffness: 300, damping: 30 },
      });
    }
  };

  useEffect(() => {
    if (!isRefreshing && pullDistance > 0) {
      controls.start({
        y: 0,
        transition: { type: 'spring', stiffness: 400, damping: 30 },
      });
      setPullDistance(0);
      setCanRefresh(false);
    }
  }, [isRefreshing, pullDistance, controls]);

  return (
    <motion.div
      className={`apple-pull-to-refresh ${className}`}
      style={{
        position: 'relative',
        ...style,
      }}
      animate={controls}
      onPan={handlePan}
      {...gestures}
      {...props}
    >
      {/* Pull indicator */}
      {pullDistance > 0 && (
        <motion.div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: pullDistance / refreshThreshold,
            color: canRefresh ? '#007AFF' : '#8E8E93',
          }}
          animate={{
            rotate: canRefresh ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            style={{
              fontSize: '24px',
              marginBottom: '4px',
              transform: 'scaleY(-1)',
            }}
          >
            ↓
          </div>
          <div
            style={{
              fontSize: '12px',
              fontWeight: '500',
            }}
          >
            {canRefresh ? 'Release to refresh' : 'Pull to refresh'}
          </div>
        </motion.div>
      )}

      {/* Loading indicator */}
      {isRefreshing && (
        <motion.div
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60px',
            color: '#007AFF',
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
        >
          <motion.div
            style={{
              width: '20px',
              height: '20px',
              border: '2px solid transparent',
              borderTop: '2px solid currentColor',
              borderRadius: '50%',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      )}

      <div style={{ marginTop: isRefreshing ? '60px' : '0' }}>{children}</div>
    </motion.div>
  );
};

const AppleTouchGestures = {
  useAppleTouchGestures,
  AppleSwipeableCard,
  AppleCarousel,
  useAppleScrollController,
  ApplePullToRefresh,
};

export default AppleTouchGestures;
