import HeroContainer from "../components/HeroContainer";

function About() {
  return (
    <>
      <div className="lg:flex lg:flex-col lg:items-center lg:h-1/2 lg:justify-center">
        <div className="py-4 lg:w-3/6 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <HeroContainer
            title={
              <h1 className="text-lg  lg:text-2xl font-extrabold tracking-wide leading-10 lg:leading-12">
                Hi, I'm Daniel <br /> Web developer
              </h1>
            }
            titleStyle={"px-4"}
          />
          <div className="font-light lg:text-base px-4">
            <p>javascript fan/Full-Stack</p>
          </div>
        </div>

        <div className="px-4 self-center lg:text-base lg:w-3/6">
          <HeroContainer
            description={
              <p>
                Problem solver, loyal employee with high attention to detail.
                Fan of video games, drawing, and coding of course. Interested in
                the entire software development process.
              </p>
            }
            desStyle={""}
          />
        </div>
      </div>
    </>
  );
}

export default About;
