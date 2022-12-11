import ParksCard from './ParksCard'

const ParkResults = (props) => {
  return ( 
    <>
      <div>
        {props.results.map(park => (
          <ParksCard 
            photo = {park.photo}
            name = {park.name}
            state = {park.state}
            description = {park.description}
            website = {park.url}
          />
        ))}
      </div>
      <section>
        {this.state.results.length ? 
        <div>
          <ParkResults results={this.state.results} />
        </div>
        :
        <div>
          <h1>No National Parks in this State</h1>
        </div>
        }
      </section>
    </>
  );
}

export default ParkResults;