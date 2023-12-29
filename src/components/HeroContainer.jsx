function HeroContainer({ title, description, titleStyle, desStyle, anchorDes, anchorHref }) {
  return (
    <>
      <div className={titleStyle}>
        {title}
      </div>
      <div className={desStyle}>
        {description}
      </div>
      <div>
        <a href={anchorHref} className="text-offText">{anchorDes}</a>
      </div>
    </>
  )
}

export default HeroContainer;
