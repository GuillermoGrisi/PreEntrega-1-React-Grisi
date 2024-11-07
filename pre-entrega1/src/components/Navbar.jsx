import CartWidget from "./CartWidget"
import Logo from "./Logo"


function Navbar() {
  return (
    <div className="navBarContainer">
        <Logo/>
        <ul  className="navLinks">
            <li>Hombre</li>
            <li>Mujer</li>
            <li>Niños</li>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default Navbar