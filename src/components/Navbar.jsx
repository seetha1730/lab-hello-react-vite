import logo from './../assets/ironhack-logo-xs.png'
import menuBar from './../assets/menu-top-xs.png'

function Navbar() {
return(
<div>
    <img src={logo} alt ="ironhack"/>
    <img src={menuBar} alt="menu"/>
</div>
)
}

export default Navbar;