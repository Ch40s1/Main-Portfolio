import ProjectCards from "../components/ProjectCards";
import carPic from '../img/carApp.png'
import wheelOD from '../img/wheelsondemand.png'

function Projects() {

  return (
    <>
      <div className="lg:flex  lg:flex-wrap lg:py-8">
        <div>
          <ProjectCards
            name={'WheelsOnDemand:'}
            description={' An e-commerce site for renting cars.'}
            imageUrl={wheelOD}
            techUsed={'react,js,mongodb,apollo,graphql,express,nodejs'}
            techDescription={'Javascript, React, Mongodb, Apollo/Server, Graphql, express, and nodejs'}
            webLink={"https://wheels-on-demand-83c5de82a3da.herokuapp.com/"}
            />
        </div>

        <div>
          <ProjectCards
            name={'Project2:'}
            description={'This is a placeholder for a future project'}
            imageUrl={carPic}
            techUsed={'ts,go'}
            techDescription={'Javascript, React, Mongodb, Apollo/Server, Graphql, express, and nodejs'}
            />
        </div>

        <div>
          <ProjectCards
            name={'Project3:'}
            description={'This is a placeholder for a future project.'}
            imageUrl={carPic}
            techUsed={'java,react'}
            techDescription={'Javascript, React, Mongodb, Apollo/Server, Graphql, express, and nodejs'}
            />
        </div>
      </div>
    </>
  )
}

export default Projects;
