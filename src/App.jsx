import carPic from './img/carApp.png';
import githubSvg from './img/icons/github.svg';
import NavBar from'./components/Nav';
import Home from './pages/Home';

/* eslint-disable react/prop-types */
function HeroContainer({ title, description }) {
  return (
    <>
      <div>
        {title}
      </div>
      <div>
        {description}
      </div>
    </>
  )
}

function About() {
  return (
    <>
      <div>
        <HeroContainer
          title={
            <h2>Hi, I'm Daniel <br/> Web developer </h2>
          }
          description={
            <h3>javascript fan/Full-Stack/</h3>
          }
        />
      </div>
      <div>
        <p>
          Problem solver, loyal employee with high attention to detail.
          Fan of video games, drawing, and coding of course. Interested in the entire software development process.
        </p>
      </div>
    </>
  )
}

function SkillIcons() {

  const languageIcons = [
    {
      id: 1,
      stack: 'html'
    },
    {
      id: 2,
      stack: 'css'
    },
    {
      id: 3,
      stack: 'js'
    },
    {
      id: 4,
      stack: 'tailwind'
    },
    {
      id: 5,
      stack: 'mongodb'
    },
    {
      id: 6,
      stack: 'express'
    },
    {
      id: 7,
      stack: 'react'
    },
    {
      id: 8,
      stack: 'nodejs'
    }
  ];
  return (
    <>
      {languageIcons.map((devIcons) => (
        <div key={devIcons.id}>
          <img src={`https://skillicons.dev/icons?i=${devIcons.stack}`} />
        </div>
      ))}
    </>
  )
}

function Skills() {
  return (
    <>
      <div>
        <div>
          <HeroContainer
            title={'Skills & Experience'}
            description={
              <p>
                My main area of expertise is front-end but I also have experience with back-end,
                using Express as my main framework for the server and MongoDB for the database.
                I mainly use HTML, CSS, JS for building small sites, and medium web application using Vite and React.
                My future plan is to learn more languages and technologies to better myself as a developer.
              </p>
            }
          />
          <a href='https://www.linkedin.com/in/daniel-zarate-66816113b/' target='blank'>
            <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
          </a>
        </div>

      </div>
      <div>
        <SkillIcons />
      </div>
    </>
  )
}

function ProjectCards({ name, imageUrl, techUsed }) {

  return (
    <>
      <div>
        <h1>{name}</h1>
        <p>
          <img src={`https://skillicons.dev/icons?i=${techUsed}`} />
        </p>
      </div>
      <div>
        <img src={imageUrl} width={500}/>
      </div>
    </>
  )
}

function Projects() {

  return (
    <>
      <div>
        <ProjectCards name={'Wheels'} imageUrl={carPic} techUsed={'html,js'} />
      </div>
    </>
  )
}

function GithubSVG() {
  return (
    <>
      <a href='https://github.com/Ch40s1'><img src={githubSvg} width={300}/></a>
    </>
  )
}


function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className='h-screen'>
          <Home />
        </section>
        <section id='Contact'>
          <About />
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <GithubSVG />
        </section>
      </main>
    </>
  )
}

export default App;
