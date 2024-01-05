function SkillIcons() {

  const languageIcons = [
    {
      id: 1,
      stack: 'html'
    },
    {
      id: 2,
      stack: 'css'
    },
    {
      id: 3,
      stack: 'js'
    },
    {
      id: 4,
      stack: 'tailwind'
    },
    {
      id: 5,
      stack: 'mongodb'
    },
    {
      id: 6,
      stack: 'express'
    },
    {
      id: 7,
      stack: 'react'
    },
    {
      id: 8,
      stack: 'nodejs'
    },
    {
      id: 9,
      stack: 'graphql'
    },
    {
      id: 10,
      stack: 'apollo'
    }
  ];
  return (
    <>
      {languageIcons.map((devIcons) => (
        <div key={devIcons.id}>
          <img src={`https://skillicons.dev/icons?i=${devIcons.stack}`} />
        </div>
      ))}
    </>
  )
}

export default SkillIcons;
