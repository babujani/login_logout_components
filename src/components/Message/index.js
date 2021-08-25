import './index.css'

const Message = props => {
  const {text} = props
  return text ? <h1>Please Login</h1> : <h1>Welcome User</h1>
}

export default Message
