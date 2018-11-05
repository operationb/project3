import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UserNav from '../../components/Navbar';
import QBList from '../../components/QBList';
import WelcomeDrop from '../../components/Welcome/WelcomeDrop';
import SignIn from '../../components/login';
import './Master.css';




class Master extends Component {
  
  state = {
    curPageLeft: 'SignIn',
    curPageRight: 'Welcome',
    QBList: []
  }
  
  
  render() {
    const { curPageLeft, curPageRight } = this.state;

    let dispLeft, dispRight;

    let qblist = [
      {
        id: 1,
        name: 'QB1',
        stat1: '5%',
        stat2: '5%',
      }
    //   ,
    //   {
    //     id: 2,
    //     name: 'QB2',
    //     stat1: '6%',
    //     stat2: '6%',
    //   },
    //   {
    //     id: 3,
    //     name: 'QB3',
    //     stat1: '3%',
    //     stat2: '3%',
    //   },
    //   {
    //     id: 4,
    //     name: 'QB4',
    //     stat1: '2%',
    //     stat2: '2%',
    
    // }
  ];


    switch (curPageLeft) {
      case 'QBList': 
        dispLeft = (<QBList qblist={qblist}/>);
        break;
      case 'SignIn': 
        dispLeft = (<SignIn />);
      default: 
        break;
    };

    switch (curPageRight) {
      case 'Welcome': 
        dispRight = (<WelcomeDrop />);
        break;
      default:
        break;
    };



    return (
      
        <Grid fluid={true} bsClass={"body-container container"}>
          <UserNav />
            <Row bsClass="row h-100">
              <Col md={6} bsClass='data-container data-left h-100 col'>{dispLeft}</Col>
              <Col md={6} bsClass='data-container data-right h-100 col'>{dispRight}</Col>
            </Row>
          <UserNav footer={true}/>
        </Grid>
      
    );
  }
}

export default Master;