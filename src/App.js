/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import Source from './source/monster-api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField: '',
    };

    this.onChangeEventHandler = this.onChangeEventHandler.bind(this);
  }

  async componentDidMount(){
    const allMonster = await Source.getMonsters();
    this.setState(
      () => {
        return {
          monsters: [...allMonster],
        }
      }
    )
  }

  async onChangeEventHandler(event) {
    const searchField = event.target.value.trim().toLowerCase();
    this.setState(
      () => {
        return { searchField }
      }
    );
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onChangeEventHandler } = this;

    const filteredResult = (stateMonsters) => {
      const filteredMonsters = stateMonsters
      .filter((monster) => {
        if (monster.name.toLowerCase()
          .includes(searchField)){
            return monster;
          }
      });

      if (searchField.trim() === '') {
        return stateMonsters;
      }

      if (filteredMonsters.length > 0) {
        return filteredMonsters;
      }
    }

    return (
      <div className='App'>
          <h1 className='text-monster'>Monsters Rolodex</h1>
          <SearchBox onChangeHandler={onChangeEventHandler} placeholder='search monsters' />
          <CardList monsters={filteredResult(monsters)} />
      </div>
    )
  }
}

export default App;
