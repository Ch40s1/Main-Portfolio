import { Outlet } from 'react-router-dom';
import Nav from "./components/Nav";


function App() {
  return (
    <>
      <body>
        <nav className='flex justify-between mx-32 sticky top-0 text-mainText'>
          <Nav />
        </nav>
        <main className=' flex w-screen h-screen items-center'>
          <Outlet />
        </main>
      </body>
    </>
  )
}

export default App;
