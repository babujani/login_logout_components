import './index.css'

const Logout = props => {
  const {onLogout} = props
  return (
    <button onClick={onLogout} type="button">
      Logout
    </button>
  )
}
export default Logout
