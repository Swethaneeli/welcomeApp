// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscription: false}

  isSubscribeButton = () => {
    this.setState(prevState => ({subscription: !prevState.subscription}))
  }

  buttonText = () => {
    const {subscription} = this.state

    return subscription ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.buttonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="content">Thank you! Happy Learning</p>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.isSubscribeButton}
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
