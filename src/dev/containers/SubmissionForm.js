import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Icon, Button, Divider, Grid } from 'semantic-ui-react';
import { LabelInputField, CheckboxField, SelectField } from 'react-semantic-redux-form';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import { SelectType } from '../actions/index'
import { bindActionCreators } from 'redux';

const validate = values => {
  const errors = {}
  
  if (!values.username) {
    errors.username = 'Username is Required'
  }

  if (!values.password) {
    errors.password = 'Password is Required'
  }

  if (values.Type == 'Buy') {
    alert("I want to buy!!");
  }

  return errors;
}

const handleChange = values => {
  const errors = {}

  if (!values.username) {
    errors.username = 'Username is Required'
  }

  if (!values.password) {
    errors.password = 'Password is Required'
  }

  if (values.Type == 'Buy') {
    alert("I want to buy!!");
  }

  return errors;
}


class LoginForm extends React.Component{

  handleChange = (e) => {
    this.props.SelectType(e);
    alert(e);
  }
  
  render(){
    return (

      <Form>

        <Form.Group width="equal">

          
          <Grid container stackable>
            <Grid.Row columns={3}>
              <Grid.Column>

                <Field
                  name='Type'
                  component={SelectField}
                  label='Type'
                  placeholder='Select Trade Type'
                  options={this.props.TRType}
                  onChange={(e, value) => { this.props.SelectType(value) }}
                />

              </Grid.Column>
              <Grid.Column>

                <Field
                  name='TRCategory'
                  component={SelectField}
                  label='Category'
                  placeholder='Type'
                  options={this.props.TRType}
                  onChange={(e, value) => { this.props.SelectType(value) }}
                />

              </Grid.Column>
              <Grid.Column>

                <Field
                  name='TRStrategy'
                  component={SelectField}
                  label='Allocation Strategy'
                  placeholder='Type'
                  options={this.props.TRType}
                  onChange={(e, value) => { this.props.SelectType(value) }}
                />

              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Form.Group>

        <br />

        <Form.Group>

          <Grid container stackable>
            <Grid.Row columns={2}>
              <Grid.Column>

          <Field name='username' component={LabelInputField}
            label={{ content: <Icon color='blue' name='user' size='large' /> }}
            labelPosition='left'
            placeholder='Username' />

              </Grid.Column>
              <Grid.Column>

          <Field name='password' component={LabelInputField}
            type='password'
            label={{ content: <Icon color='blue' name='lock' size='large' /> }}
            labelPosition='left'
            placeholder='Password' />

              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>

              <Grid.Column>

          <Field name='password' component={LabelInputField}
            type='password'
            label={{ content: <Icon color='blue' name='lock' size='large' /> }}
            labelPosition='left'
            placeholder='Password' />

              </Grid.Column>
              <Grid.Column>
          
          <Field name='password' component={LabelInputField}
            type='password'
            label={{ content: <Icon color='blue' name='lock' size='large' /> }}
            labelPosition='left'
            placeholder='Password' />

              </Grid.Column>
              <Grid.Column>
          
          <Field name='password' component={LabelInputField}
            type='password'
            label={{ content: <Icon color='blue' name='lock' size='large' /> }}
            labelPosition='left'
            placeholder='Password' />

              </Grid.Column>
            </Grid.Row>
        </Grid>
            
        </Form.Group>

        <br />

        <Form.Group>

          <Grid container stackable>
            <Grid.Row columns={2}>
              <Grid.Column>

          <Field name='username' component={LabelInputField}
            label={{ content: <Icon color='blue' name='user' size='large' /> }}
            labelPosition='left'
            placeholder='Username' />

              </Grid.Column>
              <Grid.Column>

          <Field name='password' component={LabelInputField}
            type='password'
            label={{ content: <Icon color='blue' name='lock' size='large' /> }}
            labelPosition='left'
            placeholder='Password' />

              </Grid.Column>

            </Grid.Row>
          </Grid>

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