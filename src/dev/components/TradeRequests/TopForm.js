import React, { Component } from 'react';
import { Render } from 'react-dom';
import { Button, Form, Segment, Label, Message, Sidebar, Menu, Image, Icon, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class FormExampleSubcomponentControl extends Component {
  
  state = {
    Type: "",
    Category: "",
    AllocationStrategy: "",
    Issuer: "",
    IssuerError: "",
    Asset: "",
    AssetError: "",
    RequestQuantity: "",
    RequestQuantityError: "",
    MinPrice: "",
    MinPriceError: "",
    MaxPrice: "",
    MaxPriceError: "",
    Contact: "",
    ContactError: "",
    Note: "",
    NoteError: "",
    visible: false
  };

  validate = () => {
    let isError = false;
    const errors = {
      IssuerError: "",
      AssetError: "",
      RequestQuantityError: "",
      MinPriceError: "",
      MaxPriceError: "",
      ContactError: "",
      NoteError: ""
    };

    const RegexNumeric = /(:?^|\s)(?=.)((?:0|(?:[1-9](?:\d*|\d{0,2}(?:,\d{3})*)))?(?:\.\d*[1-9])?)(?!\S)/;

    if (this.state.MaxPrice.search(RegexNumeric)) {
      isError = true;
      errors.MaxPriceError = "Username needs to be atleast 5 characters long";
    }

    if (this.state.MinPrice.search(RegexNumeric)) {
      isError = true;
      errors.MaxPriceError = "Requires valid email";
    }

    if (this.state.RequestQuantity.search(RegexNumeric)) {
      isError = true;
      errors.MaxPriceError = "Requires valid amount";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    this.props.error;

    return isError;
  };

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        Type: "",
        Category: "",
        AllocationStrategy: "",
        Issuer: "",
        IssuerError: "",
        Asset: "",
        AssetError: "",
        RequestQuantity: "",
        RequestQuantityError: "",
        MinPrice: "",
        MinPriceError: "",
        MaxPrice: "",
        MaxPriceError: "",
        Contact: "",
        ContactError: "",
        Note: "",
        NoteError: ""
      });
      this.props.onChange({
        IssuerError: "",
        AssetError: "",
        RequestQuantityError: "",
        MinPriceError: "",
        MaxPriceError: "",
        ContactError: "",
        NoteError: ""
      });
    }
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.validate();
    }
  };

  handleChange = (e, { name, value }) => {
    { this.setState({ [name]: value }), console.log(this.state) };
    console.log();
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <Form>
          <Form.Group widths='equal'>
            <Form.Select label='Type' name="Type" options={TypeArray} placeholder='Gender' onChange={this.handleChange} />
            <Form.Select label='Category' name="Category" options={CategoryArray} placeholder='Gender' onChange={this.handleChange} />
            <Form.Select label='Allocation Strategy' name="AllocationStrategy" options={AllocationStrategyArray} placeholder='Gender' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group inline>
            <Form.Input name="Issuer" label='Issuer' placeholder='Issuer' onChange={this.handleChange} onSubmit={console.log("subitted")} />
            <Form.Input name="Asset" label='Asset' placeholder='Asset' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group inline>
            <Form.Input name="RequestQuantity" errorText={"Hello"} label='Request Quantity' placeholder='0' onChange={this.handleChange} />
            <Form.Input name="MinPrice" label='Minimum Price' placeholder='0' onChange={this.handleChange} error />
            <Form.Input name="MaxPrice" label='Maximum Price' placeholder='0' onChange={this.handleChange} />
          </Form.Group>
          <hr />
          <Form.Button onSubmit={e => this.onSubmit}>Submit</Form.Button>
        </Form>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
      </div>
    )
  }
}
