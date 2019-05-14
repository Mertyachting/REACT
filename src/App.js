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
    points: 5,
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
  render(){
    return(
      <div className="App">
      {list.map(function(item){
        return (
        <div>
          <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <li>Object ID : {item.objectID}</li>
            </div> 
        )})}
        {games.map(function(game){
          return (
            <div>
              <a href={game.url}><h1>{game.title}</h1></a>
             
                <li>Genre: {game.genre}</li>
                <li>Rating: {game.usk}</li>
              </div>
          )
        }
        )}

        </div>
    );
  }
}
  

 

export default App;
