import React, { Component } from 'react';
import { Render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SelectType} from '../actions/index'


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

function matchDispatchToProps(dispatch){
  return bindActionCreators({ SelectType: SelectType}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(TRType);