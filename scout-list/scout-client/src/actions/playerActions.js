import {FETCH_PLAYERS, NEW_PLAYER, REMOVE_PLAYER} from './types';


const apiUrl = 'http://localhost:3001/api/players'

export const fetchPlayers = ()=> dispatch =>{
        fetch(apiUrl)
            .then(resp => resp.json())
            .then(playerData => dispatch({
                type: FETCH_PLAYERS,
                payload: playerData
            })
        )
            .catch(err=> err)
}

export const newPlayer = (input) => dispatch => {
    console.log('C');
    fetch(apiUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(input)
        })
            .then(res => res.json())
            .then(playerData => {
                console.log('D');
                dispatch ({
                type: NEW_PLAYER,
                payload: playerData
            })})
            .catch(err => err)
}


export const removePlayer = (playerid) => dispatch => {
    fetch(`${apiUrl}/${playerid}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => dispatch ({
        type: REMOVE_PLAYER,
        payload: playerid
    }))
}
