import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error-boundary'>
          <div className='container'>
            <div className='error-content'>
              <h1 className='text-4xl font-bold text-error mb-4'>Something went wrong</h1>
              <p className='text-secondary mb-6'>
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <div className='flex gap-4'>
                <button className='btn btn-primary' onClick={() => window.location.reload()}>
                  Refresh Page
                </button>
                <button className='btn btn-outline' onClick={() => window.history.back()}>
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
