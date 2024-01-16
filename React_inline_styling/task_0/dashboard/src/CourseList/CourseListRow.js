import React from 'react';
import PropTypes from 'prop-types';

// Inline styles
const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

const headerStyle = {
  backgroundColor: '#deb5b545',
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {

  const styleToUse = isHeader ? headerStyle : rowStyle;

  if(isHeader) {
    if(textSecondCell === null) {
      return (
        <tr style={styleToUse}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={styleToUse}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    };
  } else {
    return (
      <tr style={styleToUse}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  };
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

export default CourseListRow;
