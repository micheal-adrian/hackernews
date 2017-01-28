import React, { Component }from 'react';
import './App.css';
const list = [
  {
    title: 'Everything',
    url: 'https://facebook.github.io/react/',
    author: 'Omni',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'HGTG',
    url: 'https: //github.com/reactjs/redux',
    author: 'Douglas Adams',
    points: 5,
    objectID: 1,
  },
];
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      list: list,
    };
  }
  render() {
    return (
      <div className="App">
        {
          this.state.list.map( (item) =>
                <div key={item.objectID}>
                 <span>
                   <a href={item.url}>{item.title}</a>
                 </span>
                 <span>{item.autor}</span>
                 <span>{item.num_comments}</span>
                 <span>{item.points}</span>
               </div>
        ) //END FUNCTION
      }
    </div>//END APP
    ); //END RETURN
  } //END RENDER
} //END APP

export default App;
/*
// first {} is where react injects data
    {
      list.map(function(item) {
            return (
              <div>
                  <li>
                    <a href={item.url} > {item.title}</a>
                  </li>
                  <li>{item.author}</li>
                  <li>{item.num_components}</li>
                  <li>{item.points}</li>
              </div>
            ); //END RETURN BLOCK
        }) //END FUNCTION
        //END LIST MAP
    }
    render() {
      return (
        <div className="App">
          {
            list.map( (item) =>
                  <div key={item.objectID}>
                   <span>
                     <a href={item.url}>{item.title}</a>
                   </span>
                   <span>{item.autor}</span>
                   <span>{item.num_comments}</span>
                   <span>{item.points}</span>
                 </div>
          ) //END FUNCTION
        }
      </div>//END APP
      ); //END RETURN
    } //END RENDER
    */
