import React from 'react';
import PropTypes from 'prop-types';

export default class Address extends React.Component {
  render() {
    const {
      line1, line2, line3, line4, postCode, city,
    } = this.props;
    let htmlLine2 = '';
    let htmlLine3 = '';
    let htmlLine4 = '';
    if (line2) {
      htmlLine2 = (
        <div>
          {line2}
        </div>
      );
    }
    if (line3) {
      htmlLine3 = (
        <div>
          {line3}
        </div>
      );
    }
    if (line4) {
      htmlLine4 = (
        <div>
          {line4}
        </div>
      );
    }
    return (
      <div>
        <strong>Address:</strong>
        <div>
          {line1}
        </div>
        {htmlLine2}
        {htmlLine3}
        {htmlLine4}
        <div>
          {postCode}
          ,&nbsp;
          {city}
        </div>
      </div>
    );
  }
}

Address.propTypes = {
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string,
  line3: PropTypes.string,
  line4: PropTypes.string,
  postCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

Address.defaultProps = {
  line2: '',
  line3: '',
  line4: '',
};
