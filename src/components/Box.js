import '../App.css'
const thingsILove = [
  { src: "https://media.istockphoto.com/id/1295900106/photo/data-scientists-male-programmer-using-laptop-analyzing-and-developing-in-various-information.webp?s=612x612&w=is&k=20&c=l3HsU_oirBYqEkfnN2XMKzedcRE8GOvts1mXqId3Uks=", text: "Learning new technologies" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", text: "Working with React" },
  { src: "https://www.tibco.com/blog/wp-content/uploads/2017/12/traveling.png", text: "Travelling" },
  { src: "https://www.nps.gov/asis/learn/nature/images/horsesrunningbeach_2.jpg", text: "Horses" },

]
function Box() {
  return (
    <div>
      <h2>Things I Love</h2>
    <div className="thingsILove">
        {thingsILove.map((thing, i) => (
          <div className="card" key={i}>
            <img src={thing.src} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{thing.text}</h5>
            </div>
          </div>
        ))}

    </div>
  </div>
  );
}

export default Box;