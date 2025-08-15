import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';
import type { PerformanceMetrics } from '@/types';

// Performance metrics collection and reporting
class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private reportEndpoint = '/api/analytics'; // Replace with your analytics endpoint

  constructor() {
    this.initializeWebVitals();
  }

  private initializeWebVitals(): void {
    onCLS(this.onCLS.bind(this));
    onFCP(this.onFCP.bind(this));
    onINP(this.onINP.bind(this));
    onLCP(this.onLCP.bind(this));
    onTTFB(this.onTTFB.bind(this));
  }

  private onCLS(metric: any): void {
    this.metrics.cls = metric.value;
    this.reportMetric('CLS', metric.value);
  }

  private onFCP(metric: any): void {
    this.metrics.fcp = metric.value;
    this.reportMetric('FCP', metric.value);
  }

  private onINP(metric: any): void {
    this.metrics.fid = metric.value; // INP replaced FID
    this.reportMetric('INP', metric.value);
  }

  private onLCP(metric: any): void {
    this.metrics.lcp = metric.value;
    this.reportMetric('LCP', metric.value);
  }

  private onTTFB(metric: any): void {
    this.metrics.ttfb = metric.value;
    this.reportMetric('TTFB', metric.value);
  }

  private reportMetric(name: string, value: number): void {
    // Console logging for development
    console.log(`${name}: ${value}`);

    // Report to analytics service (Google Analytics, etc.)
    if (window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true,
      });
    }

    // Send to custom analytics endpoint
    this.sendToAnalytics(name, value);
  }

  private sendToAnalytics(name: string, value: number): void {
    // Only send in production
    if (process.env.NODE_ENV !== 'production') return;

    // Send to your analytics service
    fetch(this.reportEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metric: name,
        value: value,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
      }),
    }).catch(console.error);
  }

  getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  // Performance budget checks
  checkPerformanceBudget(): void {
    const budgets = {
      LCP: 2500, // 2.5s
      INP: 200, // 200ms (replaced FID)
      CLS: 0.1, // 0.1
      FCP: 1800, // 1.8s
      TTFB: 800, // 800ms
    };

    Object.entries(budgets).forEach(([metric, budget]) => {
      const value = this.metrics[metric.toLowerCase() as keyof PerformanceMetrics];
      if (value && value > budget) {
        console.warn(`Performance budget exceeded for ${metric}: ${value} > ${budget}`);
      }
    });
  }
}

// Resource loading performance
export const measureResourceTiming = (): void => {
  if ('performance' in window && 'getEntriesByType' in window.performance) {
    const resources = window.performance.getEntriesByType('resource');

    const slowResources = resources.filter((resource) => {
      return resource.duration > 1000; // Resources taking more than 1s
    });

    if (slowResources.length > 0) {
      console.warn('Slow loading resources detected:', slowResources);
    }
  }
};

// Memory usage monitoring
export const monitorMemoryUsage = (): void => {
  if ('memory' in window.performance) {
    const memory = (window.performance as any).memory;

    const memoryInfo = {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
      usagePercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
    };

    console.log('Memory usage:', memoryInfo);

    // Alert if memory usage is high
    if (memoryInfo.usagePercentage > 80) {
      console.warn('High memory usage detected:', memoryInfo);
    }
  }
};

// Long task detection
export const detectLongTasks = (): void => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          // Tasks longer than 50ms
          console.warn('Long task detected:', {
            duration: entry.duration,
            startTime: entry.startTime,
          });
        }
      }
    });

    observer.observe({ entryTypes: ['longtask'] });
  }
};

// Initialize performance monitoring
export const initializePerformanceMonitoring = (): PerformanceMonitor => {
  const monitor = new PerformanceMonitor();

  // Additional monitoring
  measureResourceTiming();
  monitorMemoryUsage();
  detectLongTasks();

  // Check performance budget after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      monitor.checkPerformanceBudget();
    }, 5000);
  });

  return monitor;
};

// Bundle size analysis helper
export const analyzeBundleSize = (): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log('To analyze bundle size, run: npm run analyze');
  }
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
