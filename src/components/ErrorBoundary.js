import React from "react";
import styles from "styles/error.module.css";

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={styles.container}>
          <div>
            <h1 style={{ color: "white", textAlign: "center" }}>
              Something went wrong.
            </h1>
            <div className={styles.error}>
              {this.state.error && this.state.error.toString()}
            </div>
            <div className={styles.error__info}>
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
