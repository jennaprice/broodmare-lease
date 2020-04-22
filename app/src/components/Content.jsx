import React from 'react';
import Navbar from './Navbar.jsx';

class Content extends React.Component {

constructor(props) {
  super(props);
}

render() {
    return (
      <div>
        <h1>Broodmare Lease</h1>
        <Navbar />

      </div>
    );
  }
};

export default Content;
