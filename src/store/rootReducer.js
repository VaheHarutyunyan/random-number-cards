import {combineReducers} from "redux";
import {generatorReducer} from "./generator/generator-reducer";

export const rootReducer = combineReducers({
  generator: generatorReducer,
});
