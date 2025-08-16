# Global Responsive CSS System - Usage Guide

## Overview
This document provides guidelines for using the global responsive CSS classes in `/src/styles/responsive.css`. These classes provide consistent, mobile-first responsive design across all pages.

## Typography Classes

### Hero Titles (Largest Text)
- `.hero-title-xl` - For main hero headings (24px → 48px)
- `.hero-title-lg` - For secondary hero text (20px → 40px)
- `.hero-title-md` - For smaller hero elements (18px → 36px)

### Section Titles
- `.section-title-xl` - Major section headings (20px → 32px)
- `.section-title-lg` - Standard section titles (18px → 28px)
- `.section-title-md` - Subsection titles (16px → 24px)
- `.section-title-sm` - Minor section titles (14px → 20px)

### Subtitles
- `.subtitle-xl` - Large subtitles (16px → 24px)
- `.subtitle-lg` - Standard subtitles (14px → 20px)
- `.subtitle-md` - Small subtitles (12px → 18px)

### Body Text
- `.body-xl` - Large body text (14px → 20px)
- `.body-lg` - Standard body text (13px → 18px)
- `.body-md` - Default body text (12px → 16px)
- `.body-sm` - Small body text (11px → 14px)
- `.body-xs` - Extra small body text (10px → 12px)

### Small Text
- `.text-sm` - Small text elements (10px → 13px)
- `.text-xs` - Extra small text (9px → 11px)

## Card Components

### Card Heights (Responsive)
- `.card-height-xl` - Largest cards (480px → 320px on mobile)
- `.card-height-lg` - Large cards (420px → 280px on mobile)
- `.card-height-md` - Medium cards (360px → 240px on mobile)
- `.card-height-sm` - Small cards (300px → 200px on mobile)

### Card Padding
- `.card-padding-xl` - Maximum padding (40px/32px → 20px/16px on mobile)
- `.card-padding-lg` - Large padding (32px/28px → 18px/14px on mobile)
- `.card-padding-md` - Medium padding (24px/20px → 16px/12px on mobile)
- `.card-padding-sm` - Small padding (20px/16px → 14px/10px on mobile)
- `.card-padding-xs` - Minimal padding (16px/12px → 12px/8px on mobile)

### Card Typography
- `.card-title-xl` - Card titles (18px → 24px)
- `.card-title-lg` - Standard card titles (16px → 22px)
- `.card-title-md` - Medium card titles (14px → 20px)
- `.card-title-sm` - Small card titles (12px → 18px)

- `.card-description-lg` - Large card descriptions (12px → 16px)
- `.card-description-md` - Standard descriptions (11px → 14px)
- `.card-description-sm` - Small descriptions (10px → 12px)

## Buttons

### Responsive Button Classes
- `.btn-responsive-xl` - Large buttons with adaptive padding/text
- `.btn-responsive-lg` - Standard large buttons
- `.btn-responsive-md` - Medium buttons
- `.btn-responsive-sm` - Small buttons
- `.btn-responsive-xs` - Extra small buttons

## Icons

### Icon Sizes
- `.icon-xl` - Large icons (32px → 48px)
- `.icon-lg` - Standard large icons (28px → 40px)
- `.icon-md` - Medium icons (24px → 32px)
- `.icon-sm` - Small icons (20px → 28px)
- `.icon-xs` - Extra small icons (16px → 24px)

### Icon Backgrounds
- `.icon-bg-xl` - Large icon containers with padding
- `.icon-bg-lg` - Standard icon containers
- `.icon-bg-md` - Medium icon containers
- `.icon-bg-sm` - Small icon containers
- `.icon-bg-xs` - Minimal icon containers

## Layout & Spacing

### Responsive Margins
- `.margin-bottom-xl` - Large spacing (40px → 60px)
- `.margin-bottom-lg` - Standard large spacing (32px → 48px)
- `.margin-bottom-md` - Medium spacing (24px → 36px)
- `.margin-bottom-sm` - Small spacing (16px → 24px)
- `.margin-bottom-xs` - Minimal spacing (12px → 18px)

### Grid Layouts
- `.grid-responsive` - 3-column → 2-column → 1-column grid
- `.grid-responsive-2` - 2-column → 1-column grid

## Utility Classes

### Text Alignment
- `.text-center` - Center align text
- `.text-left` - Left align text
- `.text-right` - Right align text

### Font Weights
- `.font-weight-normal` - 400 weight
- `.font-weight-medium` - 500 weight
- `.font-weight-semibold` - 600 weight
- `.font-weight-bold` - 700 weight

### Line Heights
- `.line-height-tight` - 1.1 line height
- `.line-height-snug` - 1.25 line height
- `.line-height-normal` - 1.4 line height
- `.line-height-relaxed` - 1.5 line height

### Responsive Display
- `.hide-mobile` - Hide on mobile devices (< 768px)
- `.show-mobile` - Show only on mobile devices

## Usage Examples

### Hero Section
```jsx
<div>
  <h1 className="hero-title-xl text-center margin-bottom-lg">
    Main Hero Title
  </h1>
  <p className="subtitle-lg text-center body-lg">
    Hero subtitle text
  </p>
</div>
```

### Service Card
```jsx
<div className="card-height-lg card-padding-md">
  <div className="icon-bg-lg">
    <i className="icon-lg">🚀</i>
  </div>
  <h3 className="card-title-lg margin-bottom-sm">
    Service Title
  </h3>
  <p className="card-description-md">
    Service description text
  </p>
</div>
```

### Responsive Grid
```jsx
<div className="grid-responsive margin-bottom-xl">
  <div className="card-height-md card-padding-sm">
    Card content
  </div>
  <div className="card-height-md card-padding-sm">
    Card content
  </div>
  <div className="card-height-md card-padding-sm">
    Card content
  </div>
</div>
```

### Button Example
```jsx
<button className="btn-responsive-lg">
  Click Me
</button>
```

## Breakpoints

The system uses these breakpoints:
- **Desktop**: > 768px (default values)
- **Tablet**: ≤ 768px (adjusted card heights, 2-column grids)
- **Mobile**: ≤ 480px (single column, reduced padding)
- **Small Mobile**: ≤ 360px (minimal spacing and sizing)

## Best Practices

1. **Start with larger classes** and scale down for mobile
2. **Combine classes** for complex layouts (e.g., `hero-title-xl text-center margin-bottom-lg`)
3. **Use consistent spacing** with margin classes
4. **Test on all breakpoints** to ensure proper scaling
5. **Prefer semantic class names** over arbitrary values
6. **Use grid classes** for responsive layouts instead of custom CSS

## Implementation Notes

- All classes use `!important` to override existing styles
- Classes use `clamp()` functions for smooth scaling
- Viewport units (vw) provide fluid responsiveness
- Fallback values ensure compatibility across browsers