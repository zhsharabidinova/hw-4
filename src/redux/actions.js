import { types } from "./types"

export function addUser(user) {
  return {
    type: types.ADD_USER,
    payload: user,
  };
}

export function addUserAction(user){
  return async function(dispatch){
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
    const newUser = await response.json()
    dispatch(addUser(newUser))
  }
}