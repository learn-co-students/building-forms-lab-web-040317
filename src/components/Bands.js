import React, { Component } from 'react';

class Bands extends Component {
  render(){
    return (
      <div>
        <ul>
          {this.props.store.getState().bands.map((band, idx) => {return <li key={idx}>{band}</li>})}
        </ul>
      </div>
    );
  }
};

export default Bands;
