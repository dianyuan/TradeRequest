import React, { Component } from 'react';
import { Render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';




class TRType extends Component {

  createListItems() {
    return this.props.TRType.map((Types) => {
      return (
        <li key={Types.key}>{Types.text} {Types.value}</li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }

}

function mapStateToProps(state) {
  return {
    TRType: state.TRType
  };
}


export default connect(mapStateToProps)(TRType);