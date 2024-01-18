import React from "react";
import PropTypes from 'prop-types';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer({ footerClassName }) {
  return (
    <footer className={footerClassName}>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
    </footer>
  );
}

Footer.propTypes = {
  footerClassName: PropTypes.string,
};

export default Footer;
