import githubSvg from '../img/icons/github.svg';
import bars from '../img/icons/bars.svg';
import { useState } from 'react';

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='md:flex p-5 justify-between items-center'>
        <div className='flex w-full md:w-1/2 justify-between pl-6'>
          <h1 className='text-[2rem]'>Daniels <span className='text-gray-400'>Zarate</span></h1>
          <img src={bars} width={40} onClick={()=>setOpen(!open)} className='md:hidden'></img>
        </div>
        <nav className={`justify-around flex flex-col items-center md:flex-row md:items-center bg-mainBlack md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:h-auto md:w-1/2 md:pl-0 pl-9 ${open ? 'top-20 h-[300px]': '-top-[420px]'}`}>
          <a href='#Projects' className='text-[#3CF670]'>* Projects *</a>
          <a href='#About'>About Me</a>
          <a
            href="https://www.linkedin.com/in/daniel-zarate-66816113b/"
            target="blank"
          >
            <img
              src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn Badge"
            />
          </a>
          <a href='https://github.com/Ch40s1' target='blank'><img src={githubSvg} width={38} /></a>
          <a href='https://www.linkedin.com/in/daniel-zarate-66816113b/' target="blank">Contact</a>
        </nav>
      </div>
    </>
  )
}

export default NavBar;
