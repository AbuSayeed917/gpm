import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

const ThrowError = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('This is a test error for Storybook');
  }
  return <div style={{ padding: '2rem', textAlign: 'center' }}>Normal component content</div>;
};

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    docs: {
      description: {
        component:
          'ErrorBoundary component catches JavaScript errors anywhere in the child component tree, logs those errors, and displays a fallback UI.',
      },
    },
  },
  argTypes: {
    shouldThrow: {
      control: 'boolean',
      description: 'Whether the child component should throw an error',
    },
  },
};

const Template = (args) => (
  <ErrorBoundary>
    <ThrowError shouldThrow={args.shouldThrow} />
  </ErrorBoundary>
);

export const Default = Template.bind({});
Default.args = {
  shouldThrow: false,
};
Default.parameters = {
  docs: {
    description: {
      story: 'Default state showing normal component rendering without errors.',
    },
  },
};

export const WithError = Template.bind({});
WithError.args = {
  shouldThrow: true,
};
WithError.parameters = {
  docs: {
    description: {
      story: 'Error state showing the fallback UI when a child component throws an error.',
    },
  },
};

export const Interactive = Template.bind({});
Interactive.args = {
  shouldThrow: false,
};
Interactive.parameters = {
  docs: {
    description: {
      story:
        'Interactive example - toggle the "shouldThrow" control to see the error boundary in action.',
    },
  },
};
