import Link from "./Link"

const links = [
  { href: "#about", text: "About" },
  { href: "#work", text: "Work" },
  { href: "#contact", text: "Contact" },

]
function Nav() {
  return (


    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#" >Khaled Ghanem</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {links.map((link, i) => (
              <a className="nav-link active text-light" key={i} aria-current="page" href={link.href}>{link.text}</a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;