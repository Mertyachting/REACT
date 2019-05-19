import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title:'React',
    url: 'http://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points:4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 9,
    objectID: 1,
  },
];

const games = [{
  title: 'Destiny',
  url: 'https://www.destinythegame.com/',
  genre: 'Shooter/MMORPG',
  usk: 16
},
{
  title: 'Pokemon Sword/Shield',
  url: 'https://swordshield.pokemon.com',
  genre: 'rpg',
  usk: 'pending'
}

]

const numbers = [1,2,3,4,5];
const doubled = numbers.map((number)=> number % 2);
console.log(doubled);

const listItems = numbers.map((number)=>
<li>{number}</li>);

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      list:list,
      games:games,
    };
    this.onDismiss = this.onDismiss.bind(this)
    this.delete = this.delete.bind(this);
  }

  onDismiss(id){
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({list: updatedList});
    };
  
    delete(usk){
      const isNotUsk = game => game.usk != usk;
      const updatedUsk = this.state.games.filter(isNotUsk);
      this.setState({games: updatedUsk});
    }
    
  render(){
    return(
      <div className="App">


      {this.state.list.map(item =>
       
       <div key={item.objectID}>
        
          <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
        <button onClick = {() => this.onDismiss(item.objectID)} type = 'button'> Dismiss </button>
        </div>
      )}
      

        {this.state.games.map (game=>
         
            <div>
              <a href={game.url}><h1>{game.title}</h1></a>
                <li>Name is {game.title.length} char long</li>
                <li>Genre: {game.genre}</li>
                <li>Rating: {game.usk}</li>
                <button onClick = {() => this.delete(game.usk)} type = 'button'>delete</button>
              </div>
          
        )}
        </div>
    )
        }
      }
    
        
    
  

  


 

export default App;
