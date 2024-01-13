import HeroContainer from '../components/HeroContainer';
import avatar from '../img/avatar.png'

function Home() {
  return (
    <>
      <div className='flex flex-col lg:flex-row lg:pt-10 lg:pl-8 lg:gap-60'>
        <div className='self-center p-9 lg:hidden'>
          <img src='/catanme.png' width={300} className='rounded-xl'/>
        </div>
        <div className='px-4 lg:w-3/6 lg:pt-36'>
          <HeroContainer
            title={
              <h1 className='text-lg lg:text-2xl font-extrabold tracking-wide leading-10 lg:leading-12'>
                Full-Stack Web <br/> Developer
              </h1>
            }
            description={
              <p className='font-light lg:text-base'>
                Creating websites. Solving intricate design problems and crafting intelligent user interfaces.
                Dedicated to expanding my knowledge by delving into frameworks and pursuing
                certifications to better my skills and contribute meaningfully to innovative teams.
              </p>
            }
            desStyle={'my-6'}
            anchorDes={'About me >'}
            anchorHref={'#About'}
          />
        </div>
        <div className='hidden self-center p-9 lg:block lg:self-center'>
          <img src="/catanme.png" width={500} className='rounded-xl'/>
        </div>
      </div>
    </>
  )
}

export default Home;
