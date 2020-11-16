import React ,{Component} from 'react';
import './App.css';
import {CardList} from './components/cardList/cardList-component';
import { SearchBox }  from './components/searchBoxComponent/search-box';


class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters:[],
      searchword:'',
      tittle: ''
    } 
  }
 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result=> result.json())
    .then(monsters => this.setState({monsters:monsters}) )
  }
  handleChange= e => {
    this.setState({searchword: e.target.value});
  };
  render(){
      const {monsters , searchword }=this.state;
      const filteredmonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchword.toLowerCase()))
      return (
        <div className="App">
          <h1 className='header'>Monstes Rolodex </h1>
          <SearchBox placeholder='search monsters' handlechange={this.handleChange} />
          <CardList   monsters={filteredmonsters}/>
        </div>
      );
  }
  
}
export default App;
