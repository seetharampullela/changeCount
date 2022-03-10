// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  counter = () => {
    this.setState(prevState => {
      console.log(`Previous state value is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="span">{count}</span>{' '}
          times
        </h1>
        <p className="description"> Click the button to increase the count </p>
        <div>
          <button type="button" className="button" onClick={this.counter}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
