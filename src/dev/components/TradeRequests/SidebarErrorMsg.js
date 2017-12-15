import React, { Component } from 'react';
import { Render } from 'react-dom';
import { Segment, Message, Sidebar } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class TR_Form_Top extends Component {

  render(){
    return(
      <div>
        <Sidebar.Pushable as={Segment}>

          <Sidebar animation='overlay' direction="top" visible={this.props.visible} icon='labeled' vertical>
            
            <Message error
              header='There was some errors with your submission'
              list={[
                'You must include both a upper and lower case letters in your password.',
                'You need to select your home country.',
              ]}

            />

          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/assets/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
          
        </Sidebar.Pushable>

      </div>
    );
  }
}