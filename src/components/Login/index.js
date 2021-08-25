import './index.css'

const Login = props => {
  const {onLogin} = props
  return (
    <button onClick={onLogin} type="button">
      Login
    </button>
  )
}

export default Login
