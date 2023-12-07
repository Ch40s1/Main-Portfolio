import avatar from '../img/avatar.png';

function Home() {
  return (
    <>
      <div className="text-mainText font-base">
        <h2 className='text-base'>Full-Stack Software Developer</h2>
        <p>
        Resolving design problems,
        building smart user interfaces and useful interactions,
        developing rich web applications and seamless web experiences.
        </p>
      </div>
      <div>
        <img
          src={avatar}
          width={800}
        />
      </div>
    </>
  )
}

export default Home;
