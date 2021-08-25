import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {
    access: true,
  }

  onClickBtn = () => {
    this.setState(prevState => ({access: !prevState.access}))
  }

  render() {
    const {access} = this.state
    return (
      <div className="bg-white">
        <div className="card-bg">
          <Message text={access} />
          {access ? (
            <Login onLogin={this.onClickBtn} />
          ) : (
            <Logout onLogout={this.onClickBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
