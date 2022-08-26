import Link from "./Link"

const links = [
  {href: "#about", text: "About"},
  {href: "#work", text: "Work"},
  {href: "#contact", text: "Contact"},
  
]
function Nav() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        {links.map((link, i) => (
          <a key ={i} href={link.href}>{link.text}</a>
        ))}
      </nav>
    );
  }
  
  export default Nav;