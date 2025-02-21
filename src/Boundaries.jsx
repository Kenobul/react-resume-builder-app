import React from "react";

class Boundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-10">
          <h1 className="text-red-600 text-2xl font-bold">Something went wrong.</h1>
          <p>Please try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default Boundaries;
