import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component{
  render(){
    const itemStyle ={ fontFamily: "monospace", fontSize: "20px", color: "white" };
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><Image src="http://tastylounge-prod.s3-external-1.amazonaws.com/public/files/599/themes/1609/assets/header-logo.png"/></Menu.Item>
            <Menu.Item style={itemStyle} position="right">Menus</Menu.Item>
            <Menu.Item style={itemStyle}>Loaction</Menu.Item>
            <Menu.Item style={itemStyle}>Resevations</Menu.Item>
            <Menu.Item style={itemStyle}>Contact</Menu.Item>
              <Menu.Item style={itemStyle}>Large Parties</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
