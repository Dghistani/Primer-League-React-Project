import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Goalies extends Component {
    render() {
        return (
            <div>
             <div className="bestGoalies">
        <Card style={{ width: '18rem' }}>
         <Card.Img src={this.props.badgeImg} style={{height: '18rem'}} />
        <Card.Body>
       <Card.Title><h2>{this.props.name}</h2></Card.Title>
       <Card.Text>  country: {this.props.country} </Card.Text>
       <Card.Text>   Age: {this.props.age} </Card.Text>
       <Card.Text>   Position: {this.props.position} </Card.Text>
       <Card.Text>   Number: {this.props.number} </Card.Text>
       <Card.Text>   Goals: {this.props.goals} </Card.Text>
   </Card.Body>
</Card> 
</div>               
            </div>
        )
    }
}