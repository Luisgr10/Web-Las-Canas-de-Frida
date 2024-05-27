import logoSmall from '../assets/image/Logo.png'

export const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logoSmall}/>
    </a>
  </div>
</nav>
  )
}
