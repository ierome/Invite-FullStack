import React, {useEffect} from 'react' 
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {grabGoing} from '../actions/getPerson'
import '../styles/going.css'


export default props => {
const users = useSelector(appState => appState.going)

useEffect(() => {
grabGoing()
})

    return(
    <div id="userWrap">
        {users.map(item => {
            return(
            <div id="userCard">
            <img src={item.picture.large} alt=""></img>
            <p>{item.name.first} {item.name.last}</p>
            <p>{item.phone}</p>
            <p>{item.email}</p>
            </div>
            )
        })}
    </div>
        )
}