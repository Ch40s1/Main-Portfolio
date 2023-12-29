import HeroContainer from '../components/HeroContainer';
import avatar from '../img/avatar.png'

function Home() {
  return (
    <>
      <div className='flex flex-col'>
        <div className='sm: self-center p-9'>
          <img src={avatar} width={300} className='rounded-xl'/>
        </div>
        <div className='px-4'>
          <HeroContainer
            title={
              <h1 className='text-lg font-extrabold tracking-wide leading-10'>
                Full-Stack Web <br/> Developer
              </h1>
            }
            description={
              <p className='font-light'>
                Creating websites. Solving intricate design problems and crafting intelligent user interfaces.
                Dedicated to expanding my knowledge by delving into frameworks and pursuing
                certifications to better my skills and contribute meaningfully to innovative teams.
              </p>
            }
            desStyle={'my-6'}
            anchorDes={'About me >'}
          />
        </div>
      </div>
    </>
  )
}

export default Home;
