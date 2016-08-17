import {combineReducers} from 'redux';

import {
    CHANGE_SOURCE_CODE,
    FETCH_PROBLEMS,
    RESET_SOURCE_CODE,
    SUBMISSION_RESULT_RECEIVED,
    SHOW_MODAL,
    HIDE_MODAL,
    SET_CURRENT_PROBLEM
} from '../actions';

const rootReducer = combineReducers({
    sourceCode,
    problems,
    result,
    showModal,
    modalTitle,
    currentProblemId
});

function sourceCode(state = null, action) {
    switch (action.type) {
        case CHANGE_SOURCE_CODE:
            return action.sourceCode;
        case RESET_SOURCE_CODE:
            return null;
        default:
            return state;
    }
}

function problems(state = [], action) {
    switch (action.type) {
        case FETCH_PROBLEMS:
            return action.problems;
        default:
            return state;
    }
}

function result(state = { status_code: 'WAITING' }, action) {
    switch (action.type) {
        case SUBMISSION_RESULT_RECEIVED:
            return action.result;
        default:
            return state;
    }
}

function showModal(state = { showModal: false }, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return true;
        case HIDE_MODAL:
        case FETCH_PROBLEMS:
        case SUBMISSION_RESULT_RECEIVED:
            return false;
        default:
            return state;
    }
}

function modalTitle(state = "", action) {
    switch (action.type) {
        case SHOW_MODAL:
            return action.title;
        case HIDE_MODAL:
        case FETCH_PROBLEMS:
        case SUBMISSION_RESULT_RECEIVED:
            return "";
        default:
            return state;
    }
}

function currentProblemId(state = null, action) {
    switch (action.type) {
        case SET_CURRENT_PROBLEM:
            return action.problemId;
        default:
            return state;
    }
}

export default rootReducer;