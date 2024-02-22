import githubSvg from '../img/icons/github.svg';

function NavBar() {

  const styles = {
    typeEffect: {
      fontWeight: '800',
      paddingLeft: '4px',
      backgroundColor: '#fff',
      animation: 'blink .9s infinite',
      marginLeft: '2px',
      color: "#fff"
    },
    boderButton: {

    }
  }

  return (
    <>
      <style>
        {`
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
      <div className='flex p-5 justify-between items-center'>
        <div>
          {/* there will a box that will animate as if tho typing */}
          {/* ima switch the typing to my regular name  */}
          <h1 className="lg:text-base">
            <a href='https://github.com/Ch40s1' className="text-offText underline">ch40s1</a>
            @Daniels-Portfolio ~ %
            <span style={styles.typeEffect} className="font-bold">
              |
            </span>
          </h1>
        </div>
        <div className="flex gap-4">
          <a>Projects</a>
          <a>github</a>
          <a>linked in</a>
          <img src={githubSvg} width={30} />
        </div>
        <nav className="border-solid border-white border-2 px-4 py-2 rounded-lg">
          <a href='https://www.linkedin.com/in/daniel-zarate-66816113b/' target="blank">Contact</a>
        </nav>
      </div>

    </>
  )
}

export default NavBar;
