import React from 'react';
import PropTypes from 'prop-types';
import Address from './Address';

export default class Property extends React.Component {
  render() {
    const {
      numberOfBedrooms, numberOfBathrooms, address, guest, pricePerNight, airbnbId,
    } = this.props;
    const imgPath = `img/${airbnbId}.jpg`;
    const roomsDetails = `${numberOfBedrooms} bedroom(s), ${numberOfBathrooms} bathroom(s)`;
    const cost = `For ${guest} guest(s), \u00A3${pricePerNight} per night`;
    return (
      <div className="col-sm-6 col-md-4 text-left p-big">
        <img src={imgPath} alt="Property for rent" />
        <div>
          {roomsDetails}
        </div>
        <div>
          {cost}
        </div>
        <Address {...address} />
      </div>
    );
  }
}

Property.propTypes = {
//  address: PropTypes.instanceOf(Address).isRequired,
  address: PropTypes.object.isRequired,
  airbnbId: PropTypes.number.isRequired,
  guest: PropTypes.number.isRequired,
  numberOfBathrooms: PropTypes.number.isRequired,
  numberOfBedrooms: PropTypes.number.isRequired,
  pricePerNight: PropTypes.number.isRequired,
};
