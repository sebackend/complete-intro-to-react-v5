import React, { Component } from 'react';
import { Link } from '@reach/router';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an Error
          <Link to="/">Go to home page</Link>
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
