import types from './types'

const INITIAL_STATE = {
    listName: 'Favorite',
    actors: [
        'Jan Kowalski',
        'Adam Sprężyna',
        'Adrian Wilk'
    ]
}

const actorReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
      case types.ADD_ACTOR:
        return { 
            ...state, movies:[...state.actors, action.actor]
        }
      case types.RESET_ACTORS:
        return { 
            ...state, actors:[]
        }
      default:
        return state
    }
  }

  export default actorReducer