const ParksCard = (props) => {

  const {photo, description, name, state, website} = props
  return ( 
    <div>
      {photo === null ?
        <img src='/NPSlogo.jpg' alt='NPS-logo' />
        : 
        <img src={photo.url} alt='park-detail' />
      }
      <h1>{name}, {state}</h1>
      <h3>{description}</h3>
      <a href={website} target='blank'>Site</a>
    </div>

  );
}

export default ParksCard;