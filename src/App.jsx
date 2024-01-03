import carPic from './img/carApp.png';
import blockSVG from './img/icons/decor.svg'
import githubSvg from './img/icons/github.svg';
import NavBar from'./components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';

/* eslint-disable react/prop-types */

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
      <img src={blockSVG} width={300}/>
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
        <section id='About' className='h-screen'>
          <About />
          <Skills />
        </section>
        <section id='Projects'>
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
