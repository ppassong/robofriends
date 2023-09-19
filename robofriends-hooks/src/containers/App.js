import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

function App() {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    useEffect(()=> {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)});
        // console.log(count)
    },[]) //[]안에 count 추가 시. 오직 카운트가 바뀔 때만 실행

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RobotFriends</h1>
                <button onClick={()=>setCount(count+1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
}


export default App; 