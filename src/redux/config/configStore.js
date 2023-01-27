/* 
config 구성한다.
store : 저장소
우리가 아는 그 store를 구성하는 파일임

1. rootReducer를 만든다.
2. store를 만든다
3. 내보낸다
*/

import { combineReducers, createStore } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({ todos });

const store = createStore(rootReducer);

export default store;
