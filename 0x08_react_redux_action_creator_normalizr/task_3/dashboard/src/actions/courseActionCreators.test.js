import { selectCourse, unselectCourse } from "./courseActionCreators";

describe('Action creators', () => {
  it('creates a SELECT_COURSE action', () => {
    const expectedAction = {
      type: 'SELECT_COURSE',
      index: 1,
    };

    expect(selectCourse(1)).toEqual(expectedAction);
  });

  it('creates a UNSELECT_COURSE action', () => {
    const expectedAction = {
      type: 'UNSELECT_COURSE',
      index: 1,
    };

    expect(unselectCourse(1)).toEqual(expectedAction);
  });
})
