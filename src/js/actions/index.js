import { ADD_QUIZ } from "../constants";

export function addQuiz(payload) {
    console.log('addQuiz called ', payload);
    return { type: ADD_QUIZ, payload }
};