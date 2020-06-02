const card = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: 8,
  width: 470,
  textAlign: 'center',
  margin: 25,
  backgroundColor: '#F4978E',
}
const picture = {
  marginTop: 20,
  borderRadius: 8,
  width: 400,
  objectFit: 'cover',
}
const info= {
  width: 380,
  borderRadius: 8,
  padding: 15,
  margin: 15,
  backgroundColor: '#FBC4AB',
}

class SavedPets extends React.Component{
  constructor(props)
  {
      super(props);
      this.state = {
          image: "https://cdn.clipart.email/dd7ca471f7af2bb0f501a464970b2b1b_kawaii-cute-cat-face-drawing-cuteanimals_360-360.jpeg",
          name: "No Name",
          description: "No Description",
          petId: 0,
      }
  } 

  render(){
    return(
        <div className = "savedPetsPlace">
            <div style = {card} className = "card">
                <img style = {picture} src = {this.state.image} alt = "A pet"/>
            </div>
            <div style = {card} className = "card">
                <img style = {picture} src = {this.state.image} alt = "A pet"/>
            </div>
        </div>
    );
}


}
ReactDOM.render(<SavedPets/>, document.getElementById('root'));