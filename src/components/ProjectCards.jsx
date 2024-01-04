/* eslint-disable react/prop-types */
function ProjectCards({ name, imageUrl, techUsed, description, techDescription }) {
  return (
    <>
      <div className="px-4 mb-5">
        <div>
          <div className="text-lg font-extrabold tracking-wide leading-10 mb-4">
            {name}
          </div>
          <div>
            <p className="py-3">
              {description}
            </p>
            <div className="pb-6">
              <h3>Built with: {techDescription}</h3>
              <img src={`https://skillicons.dev/icons?i=${techUsed}`} />
            </div>
          </div>
        </div>

        <div>
          <img src={imageUrl} width={500} />
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
