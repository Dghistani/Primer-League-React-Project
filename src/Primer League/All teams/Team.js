import React, { Component } from 'react'
import Teamstatus from './Teamstatus'
import {Table, Card} from 'react-bootstrap'
export default class Team extends Component {
    render() {
        // console.log("hello")
        // console.log(this.props.team)
        return (
            <div>      
                <div className="card">
                    {/* <img src={this.props.badgeImg}/> */}

                    <Card style={{ width: '18rem' }}>
                        <h2>Coach: {this.props.team  && this.props.team[0].coaches[0].coach_name}</h2>
                        <Card.Body>
                            <Card.Title><h6>Country: {this.props.team  && this.props.team[0].coaches[0].coach_country}</h6></Card.Title>
                            <Card.Text>Age: {this.props.team  && this.props.team[0].coaches[0].coach_age}</Card.Text>
                             </Card.Body>
                    </Card>
                </div>
                <Table striped bordered hover variant="light" style={{ opacity: .8 }}>
                    <thead>
                        <tr>
                            <th>#PLAYER</th>
                            <th>NAME</th>
                            <th>COUNTRY</th>
                            <th>AGE</th>
                            <th>POSITION</th>
                            <th>PLAYED</th>
                            <th>GOALS</th>
                            <th>YELLOW CARDS</th>
                            <th>RED CARDS</th>
                        </tr>
                    </thead>
                    <tbody>
                {this.props.team  && this.props.team[0].players.map((player_id)=>{
                    return <Teamstatus player_index={player_id}/>
                })}               
                           </tbody>
                </Table>
            </div>
        )
    }
}