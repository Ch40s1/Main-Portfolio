import SkillIcons from "../components/SkillIcons";
import HeroContainer from "../components/HeroContainer";

function Skills() {
  return (
    <>
      <div className="lg:flex">
        <div className="py-4">
          <div className="lg:flex lg:justify-center lg:text-2xl">
            <HeroContainer
              title={
                <h1 className="text-lg font-extrabold tracking-wide leading-10">
                  Skills & Experience
                </h1>
              }
              titleStyle={"px-4"}
            />
          </div>
          <div className="px-4 mt-3 lg:80 xl:px-96">
            <HeroContainer
              desStyle={"mb-3"}
              description={
                <p className="font-light lg:text-base">
                  My main area of expertise is front-end but I also have
                  experience with back-end, using Express as my main framework
                  for the server and MongoDB for the database. I mainly use
                  HTML, CSS, JS for building small sites, and medium web
                  application using Vite and React. My future plan is to learn
                  more languages and technologies to better myself as a
                  developer.
                  <br />
                </p>
              }
            anchorDes={"Projects >"}
            anchorHref={"#Projects"}
            />
          </div>
        </div>
      </div>
      <div className="px-4 lg:80 xl:px-96">
        <a
          href="https://www.linkedin.com/in/daniel-zarate-66816113b/"
          target="blank"
        >
          <img
            src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="LinkedIn Badge"
          />
        </a>
      </div>
      <div className="flex gap-5 flex-wrap mt-5 px-4 lg:70 xl:px-60 lg:flex lg:justify-center">
        <SkillIcons />
      </div>
    </>
  );
}
export default Skills;
