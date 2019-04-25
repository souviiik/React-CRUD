import { SIGN_UP, SIGN_IN } from '../utils/constants';

export function signupAction (values, callback) {
    console.log("values ", values);
    return {
        type: SIGN_UP,
        payload: {}
    };
}

export function signinAction (values, callback) {
    console.log("values ", values);
    return {
        type: SIGN_IN,
        payload: {}
    };
}