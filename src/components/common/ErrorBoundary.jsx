import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Route render failed:', error, info)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false })
    }
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return (
      <main className="route-error" role="alert">
        <div className="container route-error-inner">
          <p className="eyebrow">{this.props.eyebrow}</p>
          <h1>{this.props.title}</h1>
          <p>{this.props.message}</p>
          <button type="button" className="btn btn-primary" onClick={this.handleReload}>
            {this.props.reloadLabel}
          </button>
        </div>
      </main>
    )
  }
}
