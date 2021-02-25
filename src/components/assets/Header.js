import logo from '../../images/logo.png'
function Header() {
  return (
    <header>
      <img src={logo} alt="CrashCourse" />
      <button className={"button secondary"}>Registrate Gratis</button>
    </header>
  )
}

export default Header;