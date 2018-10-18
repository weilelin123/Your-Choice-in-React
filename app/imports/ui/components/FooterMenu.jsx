import React from 'react';
import {  Icon,  Grid, } from 'semantic-ui-react';

export default class FooterMenu extends React.Component{
  render(){
    return(
        <Grid className="footer-background">
          <Grid columns={2} centered container>
              <Grid.Column Container width={16}textAlign='center' className='footer-one'>
              </Grid.Column>
              <Grid.Column Container width={16}textAlign='center'>
                  <Icon name="phone icon"/>
                  +1-808-955-7383
                  <Icon name='mail icon'/>
                  Email Us
                  <Icon name='home icon'/>
                  2201 Kalakaua Ave.
                  Honolulu, HI 96815
                  <Icon name="twitter icon"></Icon>
                  <Icon name="facebook f icon"></Icon>
                  <Icon name="instagram icon"></Icon>
                  <Icon name="pinterest icon"></Icon>
                  <Icon name="tripadvisor icon"></Icon>
            </Grid.Column>
          </Grid>
        </Grid>
    );
  }
}
