import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = index => {
  return {
    type: SELECT_COURSE,
    index
  }
}

export const unselectCourse = index => {
  return {
    type: UNSELECT_COURSE,
    index
  }
}

// Higher-order function to bind action creators
export const bindCourseActionCreators = (dispatch) => ({
  boundSelectCourse: (index) => dispatch(selectCourse(index)),
  boundUnselectCourse: (index) => dispatch(unselectCourse(index))
});
