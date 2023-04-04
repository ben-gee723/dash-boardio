import { Component, Suspense } from "react";

class ErrorSuspense extends Component {
    state = { hasError: false }
    
    static getDerivedStateFromError(error) {
        return { hasError: true}
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render () {
        if (this.state.hasError) {
            return "Error"
        } 
        return (
            <Suspense fallback="Loading...">
                {this.props.element ? this.props.element : this.props.children}
            </Suspense>
        )
    }
}

export default ErrorSuspense;