import { v4 as uuidv4 } from "uuid";

/* 스토어를 구성하기 위해 reducer를 만드는 곳*/

// action items
// action creators
// initial states

const initialState = [
  {
    id: uuidv4(),
    title: "제목1",
    contents: "내용1",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목2",
    contents: "내용2",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목3",
    contents: "내용3",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
// reducers
// redcuer export

export default todos;
