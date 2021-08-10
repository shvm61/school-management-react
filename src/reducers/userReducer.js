import {
    SHOW_ALL_STUDENTS
} from "../actions/types";

const initialState = {
    studentList: []
};

export default function (state = initialState, action) {

    switch (action.type) {
        case SHOW_ALL_STUDENTS:
            return {
                ...state,
                studentList: action.payload
            }
        default:
            return state;
    }

}