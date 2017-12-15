import React, { Component } from 'react';
import { Render } from 'react-dom';
import { connect } from 'react-redux';


class TypeDetail extends Component {

  render() {
    if (!this.props.TypeDetail){
      return (<h4>Select a user...</h4>)
    }
    return (
      <div>
        <h1>{this.props.TypeDetail.key}</h1>
      </div>
    );
  }

}

function mapStateToProps(state){
  return{
    ActiveTypeReducer: state.ActiveTypeReducer
  }
}

export default connect(mapStateToProps)(TypeDetail)