import { combineReducers } from "redux";
import actorReducer from "./actors/duck";

const rootReducer = combineReducers ({
    actors: actorReducer
})

export default rootReducer