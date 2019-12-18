import React from 'react';
import Property from './Property';

export default class PropertiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/properties')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <div className="notification notification--error">
          <p>
            Error:
            {error.message}
          </p>
        </div>
      );
    }
    if (!isLoaded) {
      return (
        <div>
          <div>Loading...</div>
          <div className="loadingBar" />
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          {items.map(property => (
            <Property {...property} />
          ))}
        </div>
      </div>
    );
  }
}
