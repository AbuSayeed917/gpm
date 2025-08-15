// Apple-style icon mappings and utilities inspired by SF Symbols 7
export const AppleIconCategories = {
  // Communication & Social
  communication: [
    'Message',
    'Mail',
    'Phone',
    'VideoCall',
    'Chat',
    'Forum',
    'ContactSupport',
    'Contacts',
    'PersonAdd',
    'Group',
    'Share',
    'Reply',
    'Forward',
    'Send',
  ],

  // Media & Entertainment
  media: [
    'PlayArrow',
    'Pause',
    'Stop',
    'SkipNext',
    'SkipPrevious',
    'Repeat',
    'Shuffle',
    'VolumeUp',
    'VolumeOff',
    'Photo',
    'Camera',
    'Videocam',
    'Movie',
    'Music',
    'Album',
    'Queue',
    'LibraryMusic',
    'PhotoLibrary',
    'Collections',
  ],

  // Navigation & Actions
  navigation: [
    'ArrowForward',
    'ArrowBack',
    'ArrowUpward',
    'ArrowDownward',
    'ArrowLeft',
    'ArrowRight',
    'KeyboardArrowUp',
    'KeyboardArrowDown',
    'ExpandMore',
    'ExpandLess',
    'ChevronLeft',
    'ChevronRight',
    'FirstPage',
    'LastPage',
    'Home',
    'Menu',
    'Close',
  ],

  // System & Settings
  system: [
    'Settings',
    'Tune',
    'Build',
    'Code',
    'Storage',
    'Memory',
    'Speed',
    'Security',
    'Lock',
    'LockOpen',
    'Visibility',
    'VisibilityOff',
    'Shield',
    'Admin',
    'Key',
    'Fingerprint',
    'Password',
    'VpnKey',
    'Update',
    'Sync',
    'Refresh',
  ],

  // Content & Editing
  content: [
    'Add',
    'Remove',
    'Edit',
    'Delete',
    'Save',
    'SaveAs',
    'Copy',
    'Cut',
    'Paste',
    'Undo',
    'Redo',
    'Search',
    'FilterList',
    'Sort',
    'Clear',
    'SelectAll',
    'Deselect',
    'Check',
    'CheckBox',
    'RadioButton',
    'ToggleOn',
    'ToggleOff',
  ],

  // File & Cloud
  files: [
    'Folder',
    'FolderOpen',
    'FolderSpecial',
    'InsertDriveFile',
    'Description',
    'PictureAsPdf',
    'TextSnippet',
    'Cloud',
    'CloudDownload',
    'CloudUpload',
    'CloudSync',
    'Backup',
    'Archive',
    'Unarchive',
    'AttachFile',
    'Link',
  ],

  // Business & Finance
  business: [
    'Business',
    'Work',
    'AccountBalance',
    'Payment',
    'CreditCard',
    'MonetizationOn',
    'TrendingUp',
    'TrendingDown',
    'Analytics',
    'Assessment',
    'BarChart',
    'PieChart',
    'Timeline',
    'ShowChart',
    'Insights',
    'Receipt',
    'ShoppingCart',
    'Store',
  ],

  // Health & Wellness
  health: [
    'Favorite',
    'FavoriteBorder',
    'MonitorHeart',
    'Psychology',
    'SelfImprovement',
    'DirectionsRun',
    'FitnessCenter',
    'Pool',
    'Sports',
    'LocalHospital',
    'Medication',
    'Healing',
    'EmergencyShare',
    'HealthAndSafety',
  ],

  // Transportation
  transport: [
    'DirectionsCar',
    'DirectionsBike',
    'DirectionsWalk',
    'DirectionsBus',
    'DirectionsSubway',
    'Flight',
    'Train',
    'LocalShipping',
    'Navigation',
    'GpsFixed',
    'LocationOn',
    'LocationOff',
    'MyLocation',
    'Explore',
    'Map',
  ],

  // Weather & Nature
  weather: [
    'WbSunny',
    'NightsStay',
    'Cloud',
    'CloudQueue',
    'Thunderstorm',
    'AcUnit',
    'Umbrella',
    'Waves',
    'Terrain',
    'Park',
    'Forest',
    'Eco',
    'Energy',
    'WaterDrop',
    'Air',
    'WindPower',
    'Solar',
  ],

  // Notification & Status
  status: [
    'Notifications',
    'NotificationImportant',
    'NotificationsOff',
    'Warning',
    'Error',
    'CheckCircle',
    'Cancel',
    'Info',
    'Help',
    'HelpOutline',
    'Lightbulb',
    'LightbulbOutline',
    'Star',
    'StarBorder',
    'Bookmark',
    'BookmarkBorder',
  ],

  // Time & Calendar
  time: [
    'Schedule',
    'AccessTime',
    'Timer',
    'Alarm',
    'AlarmOn',
    'AlarmOff',
    'Snooze',
    'Today',
    'DateRange',
    'Event',
    'EventAvailable',
    'CalendarToday',
    'History',
    'Update',
    'RestoreFromTrash',
    'WatchLater',
  ],
};

// Apple-style animation presets
export const AppleAnimations = {
  // Basic animations
  subtle: { type: 'pulse', duration: 2, intensity: 0.05 },
  gentle: { type: 'bounce', duration: 1.5, intensity: 0.1 },
  lively: { type: 'variable', duration: 3, intensity: 0.2 },

  // Interactive states
  hover: { scale: 1.1, brightness: 1.1, duration: 0.2 },
  press: { scale: 0.95, brightness: 0.9, duration: 0.1 },

  // Entry animations
  slideInLeft: { x: [-100, 0], opacity: [0, 1], duration: 0.5 },
  slideInRight: { x: [100, 0], opacity: [0, 1], duration: 0.5 },
  slideInUp: { y: [50, 0], opacity: [0, 1], duration: 0.5 },
  slideInDown: { y: [-50, 0], opacity: [0, 1], duration: 0.5 },
  fadeIn: { opacity: [0, 1], scale: [0.8, 1], duration: 0.4 },
  scaleIn: { scale: [0, 1.1, 1], duration: 0.6 },

  // Loading animations
  spin: { rotate: [0, 360], duration: 1, repeat: Infinity },
  pulse: { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7], duration: 1.5, repeat: Infinity },
  breathe: { scale: [1, 1.05, 1], duration: 3, repeat: Infinity },

  // Special effects
  wiggle: { rotate: [0, -5, 5, -5, 0], duration: 0.5 },
  shake: { x: [0, -2, 2, -2, 0], duration: 0.3 },
  flip: { rotateY: [0, 180], duration: 0.6 },
  rubber: {
    scale: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
    duration: 1,
  },
};

// Apple-style color schemes
export const AppleColorSchemes = {
  // System colors
  blue: '#007AFF',
  green: '#30D158',
  indigo: '#5856D6',
  orange: '#FF9F0A',
  pink: '#FF375F',
  purple: '#AF52DE',
  red: '#FF3B30',
  teal: '#5AC8FA',
  yellow: '#FFCC00',

  // Gray scale
  black: '#000000',
  white: '#FFFFFF',
  gray1: '#F2F2F7',
  gray2: '#E5E5EA',
  gray3: '#D1D1D6',
  gray4: '#C7C7CC',
  gray5: '#AEAEB2',
  gray6: '#8E8E93',

  // Semantic colors
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#30D158',
  warning: '#FF9F0A',
  danger: '#FF3B30',
  info: '#5AC8FA',

  // Gradients
  gradients: {
    bluePurple: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
    greenBlue: 'linear-gradient(135deg, #30D158 0%, #007AFF 100%)',
    orangePink: 'linear-gradient(135deg, #FF9F0A 0%, #FF375F 100%)',
    purplePink: 'linear-gradient(135deg, #5856D6 0%, #AF52DE 100%)',
    redOrange: 'linear-gradient(135deg, #FF3B30 0%, #FF9F0A 100%)',
    tealBlue: 'linear-gradient(135deg, #5AC8FA 0%, #007AFF 100%)',
    sunset: 'linear-gradient(135deg, #FF9F0A 0%, #FF375F 50%, #AF52DE 100%)',
    ocean: 'linear-gradient(135deg, #5AC8FA 0%, #007AFF 50%, #5856D6 100%)',
    forest: 'linear-gradient(135deg, #30D158 0%, #34C759 50%, #007AFF 100%)',
  },
};

// Apple-style typography scales
export const AppleTypography = {
  // Display sizes (iOS 17 / macOS Sonoma)
  largeTitle: { fontSize: '34px', lineHeight: '41px', fontWeight: '700' },
  title1: { fontSize: '28px', lineHeight: '34px', fontWeight: '700' },
  title2: { fontSize: '22px', lineHeight: '28px', fontWeight: '700' },
  title3: { fontSize: '20px', lineHeight: '25px', fontWeight: '600' },

  // Text sizes
  headline: { fontSize: '17px', lineHeight: '22px', fontWeight: '600' },
  body: { fontSize: '17px', lineHeight: '22px', fontWeight: '400' },
  callout: { fontSize: '16px', lineHeight: '21px', fontWeight: '400' },
  subheadline: { fontSize: '15px', lineHeight: '20px', fontWeight: '400' },
  footnote: { fontSize: '13px', lineHeight: '18px', fontWeight: '400' },
  caption1: { fontSize: '12px', lineHeight: '16px', fontWeight: '400' },
  caption2: { fontSize: '11px', lineHeight: '13px', fontWeight: '400' },

  // Font families
  fontFamilies: {
    system: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
    display: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    text: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace',
  },
};

// Apple-style spacing system
export const AppleSpacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px',

  // Component-specific spacing
  component: {
    padding: {
      button: { sm: '8px 16px', md: '12px 24px', lg: '16px 32px' },
      card: '24px',
      modal: '32px',
      section: '48px',
    },
    margin: {
      element: '16px',
      section: '48px',
      page: '64px',
    },
    gap: {
      tight: '8px',
      normal: '16px',
      loose: '32px',
    },
  },
};

// Apple-style border radius system
export const AppleBorderRadius = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  xxl: '32px',

  // Component-specific radius
  button: '12px',
  card: '16px',
  modal: '24px',
  pill: '9999px',
};

// Apple-style shadow system
export const AppleShadows = {
  xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
  sm: '0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
  lg: '0 8px 16px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)',
  xl: '0 16px 32px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.1)',

  // Colored shadows
  colored: {
    blue: '0 8px 32px rgba(0, 122, 255, 0.3)',
    green: '0 8px 32px rgba(48, 209, 88, 0.3)',
    orange: '0 8px 32px rgba(255, 159, 10, 0.3)',
    red: '0 8px 32px rgba(255, 59, 48, 0.3)',
    purple: '0 8px 32px rgba(175, 82, 222, 0.3)',
  },

  // Interactive shadows
  interactive: {
    hover: '0 12px 24px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1)',
    press: '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  },
};

// Utility functions
export const getIconsByCategory = (category) => {
  return AppleIconCategories[category] || [];
};

export const searchIcons = (query) => {
  const results = [];
  const searchTerm = query.toLowerCase();

  Object.entries(AppleIconCategories).forEach(([category, icons]) => {
    const matchingIcons = icons.filter((icon) => icon.toLowerCase().includes(searchTerm));
    if (matchingIcons.length > 0) {
      results.push({ category, icons: matchingIcons });
    }
  });

  return results;
};

export const getAllIcons = () => {
  return Object.values(AppleIconCategories).flat();
};

export const getRandomIcons = (count = 10) => {
  const allIcons = getAllIcons();
  const shuffled = allIcons.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Apple-style utility classes generator
export const generateAppleUtilities = () => {
  const utilities = {};

  // Spacing utilities
  Object.entries(AppleSpacing).forEach(([key, value]) => {
    utilities[`p-${key}`] = { padding: value };
    utilities[`m-${key}`] = { margin: value };
    utilities[`gap-${key}`] = { gap: value };
  });

  // Color utilities
  Object.entries(AppleColorSchemes).forEach(([key, value]) => {
    if (typeof value === 'string') {
      utilities[`text-${key}`] = { color: value };
      utilities[`bg-${key}`] = { backgroundColor: value };
      utilities[`border-${key}`] = { borderColor: value };
    }
  });

  // Border radius utilities
  Object.entries(AppleBorderRadius).forEach(([key, value]) => {
    utilities[`rounded-${key}`] = { borderRadius: value };
  });

  // Shadow utilities
  Object.entries(AppleShadows).forEach(([key, value]) => {
    if (typeof value === 'string') {
      utilities[`shadow-${key}`] = { boxShadow: value };
    }
  });

  return utilities;
};

const AppleIconsUtils = {
  AppleIconCategories,
  AppleAnimations,
  AppleColorSchemes,
  AppleTypography,
  AppleSpacing,
  AppleBorderRadius,
  AppleShadows,
  getIconsByCategory,
  searchIcons,
  getAllIcons,
  getRandomIcons,
  generateAppleUtilities,
};

export default AppleIconsUtils;
