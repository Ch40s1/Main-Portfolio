import HeroContainer from '../components/HeroContainer';
import catnme from '../img/catanme.png'

//this is going to be the start of the new home page
// i will be using the figma design to create the home page
// my plan is to start on the nav bar and work my way down
// i will be using tailwind css to style the page
// currently in my first sprint i will be working on the home page and the about page


function Home() {
  return (
    <>
      <div className='flex flex-col lg:flex-row lg:pt-10 lg:pl-8 lg:gap-60'>
        <div className='self-center p-9 lg:hidden'>
          <picture>
            <img src={catnme} width={300} className='rounded-xl' loading='lazy' />
          </picture>
        </div>
        <div className='px-4 lg:w-3/6 lg:pt-36'>
          <HeroContainer
            title={
              <h1 className='text-lg lg:text-[100px] font-extrabold tracking-wide leading-[7rem]'>
                Full-Stack Web <br /> Developer
              </h1>
            }
            description={
              <p className='font-light lg:text-base'>
                I create simple to use websites and I love what I do.
              </p>
            }
            desStyle={'my-6'}
          />
        </div>
        <div className='hidden self-center p-9 lg:block lg:self-center'>
          <img src={catnme} width={500} className='rounded-xl' />
        </div>
      </div>
    </>
  )
}

export default Home;
