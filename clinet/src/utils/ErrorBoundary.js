import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
    this.setState({ error });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div><span>Somthing went wrong!!!</span><span>{this.state.error && this.state.error.message}</span></div>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.array
};

export default ErrorBoundary;