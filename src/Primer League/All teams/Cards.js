import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import { Card, Button} from 'react-bootstrap'
import '/Users/dag/Desktop/SEI/Project_2/soccer/src/App.css';
export default class Cards extends Component {
    render() {
        return (
            <div>
                <div className="cardd">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img src={this.props.badgeImg} />
                        <Card.Body>
                            <Card.Title><h2>{this.props.teamName}</h2></Card.Title>
                            <Card.Text>   Premier Leagu </Card.Text>
                            <Button variant="dark"> <Link to={ "/AllTeams/"+this.props.teamName} >see ditals</Link></Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        )
    }
}