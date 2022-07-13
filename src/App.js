/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import Source from './source/monster-api';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilterMonsters] = useState([]);
    
    useEffect(() => {
      const getAllMonsters = async () => {
        const allMonster = await Source.getMonsters();

        setMonsters(allMonster);
      }
      getAllMonsters();
    }, [])

    useEffect(() => {
      const filteredResult = (stateMonsters, searchMonster) => {
        const newFilteredMonsters = stateMonsters
        .filter((monster) => {
          if (monster.name.toLowerCase()
            .includes(searchMonster)){
              return monster;
            }
        });
  
        if (searchMonster.trim() === '') {
          return stateMonsters.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
        }
  
        if (newFilteredMonsters.length > 0) {
          return newFilteredMonsters;
        }
      }
      const resultFilterMonster = filteredResult(monsters, searchField);

      setFilterMonsters(resultFilterMonster);
    }, [monsters, searchField]);
    
    
    const onChangeEventHandler = (event) => {
      const searchFieldString = event.target.value.toLowerCase();

      setSearchField(searchFieldString);
    }

    return (
      <div className='App'>
        <h1 className='text-monster'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onChangeEventHandler} placeholder='search monsters' />
        <CardList monsters={filteredMonsters} />
      </div>
    )
}

export default App;
