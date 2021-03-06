// importing createStore function, part of 
// the Redux library
import {createStore} from "redux"

// include sole reducer within the createStore
// function

// 

const reducer = (state={
    cromPraised: false
  }, action) => {
  switch(action.type) {
    case "PRAISE_CROM": {
      return {
        cromPraised: action.cromPraised
      }
    }
  }
  return state
}

const store = createStore(reducer)

export default store
