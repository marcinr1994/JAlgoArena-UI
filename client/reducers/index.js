import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import {
    CHANGE_SOURCE_CODE,
    FETCH_PROBLEMS,
    JUDGE_RESULT_RECEIVED,
    SET_CURRENT_PROBLEM,
    SUBMISSION_SAVED,
    FETCH_SUBMISSIONS,
    FETCH_RANKING,
    START_JUDGE,
    START_FETCHING_PROBLEMS,
    START_SUBMISSION
} from '../actions';

import {
    CHECKED_SESSION_STATUS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    START_SIGNUP,
    START_LOGIN
} from '../actions/AuthActions';

import {updateUserInfo} from "./AuthReducers";

const rootReducer = combineReducers({
    sourceCode,
    problems,
    result,
    showModal,
    currentProblemId,
    routing: routerReducer,
    userAuthSession: updateUserInfo,
    submissions,
    ranking
});

function sourceCode(state = null, action) {
    switch (action.type) {
        case CHANGE_SOURCE_CODE:
            return action.sourceCode;
        case SET_CURRENT_PROBLEM:
        case SUBMISSION_SAVED:
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
        case JUDGE_RESULT_RECEIVED:
            return action.result;
        case SET_CURRENT_PROBLEM:
        case SUBMISSION_SAVED:
            return { status_code: 'WAITING' };
        default:
            return state;
    }
}

function showModal(state = false, action) {
    switch (action.type) {
        case START_SIGNUP:
        case START_LOGIN:
        case START_JUDGE:
        case START_FETCHING_PROBLEMS:
        case START_SUBMISSION:
            return true;
        case SET_CURRENT_PROBLEM:
        case FETCH_PROBLEMS:
        case JUDGE_RESULT_RECEIVED:
        case SUBMISSION_SAVED:
        case FETCH_SUBMISSIONS:
        case FETCH_RANKING:
        case CHECKED_SESSION_STATUS:
        case LOGIN_FAIL:
        case LOGIN_SUCCESS:
        case LOGOUT_SUCCESS:
        case SIGNUP_FAIL:
        case SIGNUP_SUCCESS:
            return false;
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

function submissions(state = [], action) {
    switch (action.type) {
        case FETCH_SUBMISSIONS:
            return action.submissions;
        default:
            return state;
    }
}

function ranking(state = [], action) {
    switch (action.type) {
        case FETCH_RANKING:
            return action.ranking;
        default:
            return state;
    }
}

export default rootReducer;