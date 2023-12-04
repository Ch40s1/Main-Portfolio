import { Outlet } from 'react-router-dom';
import Nav from "./components/Nav";


function App() {
  return (
    <>
      <body>
        <nav>
          <Nav />
        </nav>
        <main>
          <Outlet />
        </main>
      </body>
    </>
  )
}

export default App;
