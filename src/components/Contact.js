const contact = [
    { src: "https://github.com/khaledghanem1", text: "Github"},
    { src: "https://www.linkedin.com/in/ghanemk/", text: "LinkedIn"}
  
  ]

function Contact() {
    return (
        <>
        <h2 id="contact">Connect with Me</h2>
        <div className="skills">
          {contact.map((link, i) => (
            <a href={link.src}>
            <span key={i} class="badge rounded-pill text-bg-light">{link.text}</span>
            </a>
          ))}
  
        </div>
        </>
    );
  }
  
  export default Contact;