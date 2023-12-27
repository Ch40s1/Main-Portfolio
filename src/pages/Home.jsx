import avatar from '../img/avatar.png';


function Home() {
  return (
    <>
      <div className="text-mainText font-base ml-10">
        <h2 className='text-base'>Full-Stack Software Developer</h2>
        <p>
        Resolving design problems,<br/>
        building smart user interfaces and useful interactions,<br/>
        developing rich web applications and seamless web experiences.
        </p>
      </div>
      <div className='ml-20'>
        <img
          src={avatar}
          width={800}
        />
      </div>
    </>
  )
}

export default Home;
