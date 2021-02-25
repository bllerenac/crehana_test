import logo from '../../images/logo.png'
function Header() {
  return (
    <header>
      <figure>
        <img src={logo} alt="CrashCourse" />

      </figure>
      <button className={"button secondary"}>Registrate Gratis</button>
    </header>
  )
}

export default Header;