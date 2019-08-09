import { ADD_QUIZ } from "../constants";

const initialState = {
    quiz: []
  };

function rootReducer(state = initialState, action) {
    if (action.type === ADD_QUIZ) {
        return Object.assign({}, state, {
            quiz: state.quiz.concat(action.payload)
        });
    }
    console.log('changed state has ', state);
    return state;
};

export default rootReducer;