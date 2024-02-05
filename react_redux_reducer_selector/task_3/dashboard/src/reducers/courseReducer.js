import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";

const initialState = [];

function courseReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS:
      // Add isSelected property to each course & return the updated array
      return action.data.map(course => ({ ...course, isSelected: false }));
    case SELECT_COURSE:
      // Map over the state & update isSelected property of matching course
      return state.map(course =>
        course.id === action.index ? { ...course, isSelected: true } : course
      );
    case UNSELECT_COURSE:
      return state.map(course =>
        course.id === action.index ? { ...course, isSelected: false } : course
      );
    default:
      return state;
  }
}

export default courseReducer;
