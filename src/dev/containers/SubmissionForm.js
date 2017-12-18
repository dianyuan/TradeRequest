import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Icon, Button } from 'semantic-ui-react';
import { LabelInputField, CheckboxField, Select } from 'react-semantic-redux-form';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import { SelectType } from '../actions/index'
import { bindActionCreators } from 'redux';

const validate = values => {
  const errors = {}
  if (!values.test) {
    errors.test = 'Username is Required'
  }

  if (!values.password) {
    errors.password = 'Password is Required'
  }
  return errors;
}


class LoginForm extends React.Component{
  
  render(){
    return (
      <Form>
        <Form.Group>
        <Field name='username' component={LabelInputField}
          label={{ content: <Icon color='blue' name='user' size='large' /> }}
          labelPosition='left'
          placeholder='Username' />
        <Field name='password' component={LabelInputField}
          type='password'
          label={{ content: <Icon color='blue' name='lock' size='large' /> }}
          labelPosition='left'
          placeholder='Password' />
          
          <Field 
            name='selection' 
            component={Select} 
            label='Stay sign in' 
            placeholder='Type' 
            options={this.props.TRType}
            >
          </Field>
        </Form.Group>
        <Field name='remember' component={CheckboxField}
          label='Stay sign in' />
        <Form.Field control={Button} primary className='submit-btn'
          type='submit'>
          Submit
        </Form.Field>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    TRType: state.TRType
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ SelectType: SelectType }, dispatch)
}

LoginForm = connect(mapStateToProps, matchDispatchToProps)(LoginForm);

export default reduxForm({
  form: 'loginForm',	// a unique identifier for this form
  validate,
}) (LoginForm)