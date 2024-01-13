import NavBar from'./components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import GithubSVG from './components/githubSvg';

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
        <section id='Projects' className='sm:pt-20 lg:pt-40'>
          <Projects />
        </section>
        <section className={`sticky bottom-0`}>
          <GithubSVG />
        </section>
      </main>
    </>
  )
}

export default App;
