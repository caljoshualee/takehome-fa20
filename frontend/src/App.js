import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ], restaurantId: ""
    }
  }

  handleSubmit = () => {
    const newRestaurant = {id: this.state.restaurants[length(restaurants)-1].id+1, name: this.state.restaurantId, rating:0}
     
    this.setState((prevState) => ({restaurants: [...prevState.restaurants, newRestaurant]}))
  }

  updateInputValue(evt) {
    this.setState({
      restaurantId: evt.target.restaurant
    });
  }

  render() {
    return (
      <div className="App">
        <Counter count={0}/>
        <input restaurant={this.state.restaurantId} onChange={evt => this.updateInputValue(evt)}/>
        <button onClick={this.handleSubmit}>Submit</button>
        <Instructions complete={true}/>
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
      </div>
    )
  }
}

export default App
