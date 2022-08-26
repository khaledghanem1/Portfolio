import '../App.css'
import Contact from './Contact'
const skills = ["HTML", "CSS", "Javascript", "Node.js", "MySQl"]
const github = [
  { src: "https://github.com/khaledghanem1/Social-Media-API", text: "Social Media API", description: "Create an API for a social media app" },
  { src: "https://github.com/khaledghanem1/Note-Taker", text: "Note Taker", description: "Note Taker with Local Storage" },
  { src: "https://github.com/khaledghanem1/Professional-README-Generator", text: "ReadMe Generator", description: "Automatically create professional README's" },
  { src: "https://github.com/khaledghanem1/Mix-up-Movie-Night", text: "Mix Up Movie Night", description: "Randomize your movie & drink selection" },

]
function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill, i) => (
          <span key={i} class="badge rounded-pill text-bg-light">{skill}</span>
        ))}

      </div>
      <h2>Github Projects</h2>
      {github.map((project, i) => (
        <div className="card github" key={i}>

          <div className="card-body">
            <h5 className="card-title">{project.text}</h5>
            <p className="card-text">{project.description}</p>
            <a href={project.src} className="card-link">Github Link</a>

          </div>
        </div>

      ))}

    </div>
  );
}

export default Skills;