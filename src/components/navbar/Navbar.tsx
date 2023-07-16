import './navbar.scss'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>opadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="icon" className='icon'/>
        <img src="/app.svg" alt="icon" className='icon'/>
        <img src="/expand.svg" alt="icon" className='icon'/>
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="settingIcon"  className='icon'/>
      </div>

    </div>
  )
}
