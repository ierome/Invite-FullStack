import store from '../store'
import axios from 'axios'

export function getPerson() {
  axios.get('/api/').then(resp => {
    store.dispatch({
      type: 'RANDOM_PERSON',
      payload: resp.data
    })
  })
}
export function clearInvite() {
  store.dispatch({
    type: 'CLEAR_INVITE',
  })
  getPerson()
}
export function getNumbers() {
  axios.get('/api/numbers').then(resp => {
    store.dispatch({
      type: 'GRAB_NUMBERS',
      payload: resp.data
    })
  })
}
export function markGoing(person) {
  axios.post('/api/mark-invitee', {results: person, going: true}).then(resp => {
  })
  getNumbers()
}
export function markNotGoing(person) {
  axios.post('/api/mark-invitee', {results: person, going: false})
  getNumbers()
}
export function grabGoing() {
  axios.get('/api/going').then(resp => {
    store.dispatch({
      type: 'GRAB_GOING',
      payload: resp.data
    })
  })
}
export function grabNotGoing() {
  axios.get('/api/notgoing').then(resp => {
    store.dispatch({
      type: 'GRAB_NOT_GOING',
      payload: resp.data
    })
  })
}