/* eslint-disable react/prop-types */
function ProjectCards({ name, imageUrl, techUsed, description, techDescription, webLink }) {
  return (
    <>
      <div className="px-4 mb-5">
        <div>
          <h1 className="text-lg lg:text-2xl font-extrabold tracking-wide leading-10 mb-4">
            {name}
          </h1>
          <div>
            <p className="py-3 lg:text-base">
              {description}
            </p>
            <div className="pb-6">
              <h3 className="lg:text-base">
                Built with:
                {techDescription}
              </h3>
              <img src={`https://skillicons.dev/icons?i=${techUsed}`} />
            </div>
          </div>
        </div>

        <div>
          <img src={imageUrl} width={500} />
          <a href={webLink} className="text-offText lg:text-base" target="blank">Website link</a>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
