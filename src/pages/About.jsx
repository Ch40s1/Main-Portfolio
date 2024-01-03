import HeroContainer from "../components/HeroContainer";

function About() {
  return (
    <>
      <div>
        <div className="py-4">
          <HeroContainer
            title={
              <h1 className="text-lg font-extrabold tracking-wide leading-10">
                Hi, I'm Daniel <br /> Web developer
              </h1>
            }
            titleStyle={"px-4"}
          />
          <div className="font-light px-4">
            <p>javascript fan/Full-Stack/</p>
          </div>
        </div>

        <div className="px-4">
          <HeroContainer
            description={
              <p>
                Problem solver, loyal employee with high attention to detail.
                Fan of video games, drawing, and coding of course. Interested in
                the entire software development process.
              </p>
            }
            desStyle={"font-light"}
          />
        </div>
      </div>
    </>
  );
}

export default About;
