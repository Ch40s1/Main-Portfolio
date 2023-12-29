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
          <h1>
            <a href='https://github.com/Ch40s1' className="text-offText underline">ch40s1</a>
            @Daniels-Portfolio ~ %
            <span style={styles.typeEffect} className="font-bold">
              |
            </span>
          </h1>
        </div>
        <nav className="border-solid border-white border-2 px-4 py-2 rounded-lg">
          <a href='#Contact'>Contact</a>
        </nav>
      </div>

    </>
  )
}

export default NavBar;
