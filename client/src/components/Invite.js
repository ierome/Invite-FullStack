import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {getPerson, getNumbers, markGoing, markNotGoing, clearInvite} from '../actions/getPerson'
import {useSelector} from 'react-redux'
import '../styles/invite.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';



export default props => {
const people = useSelector(appState => appState.randomPerson)
const going = useSelector(appState => appState.goingNum)
const notgoing = useSelector(appState => appState.notGoingNum)
console.log(notgoing)
    
useEffect(() => {
    getPerson()
    getNumbers()
}, [])

function handleGoing(e) {
e.preventDefault()
clearInvite()
markGoing(people)
}
function handleNotGoing(e) {
e.preventDefault()
clearInvite()
markNotGoing(people)
}


    return (
    <div id="mainWrapper">
    <h1>Invite</h1>
    <div id="markButtons">
        <div id="goingButton">
    <Link to="/going">Going {going}</Link>
    </div>
    <div id="notGoingButton">
    <Link to="/not-going">Not Going {notgoing}</Link>
    </div>
    </div>
    <div id="person">
    {people.map((person, i) => {
        return (
            <div id="personCard" key={i}>
                <img src={person.picture.large} alt=""></img>
                <p>Name: {person.name.first} {person.name.last}</p>
                <p>Phone: {person.cell}</p>
                <p>Email: {person.email}</p>
                <button onClick={handleGoing}><MaterialIcon icon="done_outline" color='#32CD32'/></button>
                <button onClick={handleNotGoing}><MaterialIcon icon="not_interested" color='#FF0000'/></button>
            </div>
            )
    })}
    </div>

    </div>)
}