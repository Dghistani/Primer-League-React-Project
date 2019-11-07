import React, { Component } from 'react'
export default class Teamstatus extends Component {
    render() {
        return (   
                <tr>
                                <td>{this.props.player_index.player_number}</td>
                                <td>{this.props.player_index.player_name}</td>
                                <td>{this.props.player_index.player_country}</td>
                                <td>{this.props.player_index.player_age}</td>
                                <td>{this.props.player_index.player_type}</td>
                                <td>{this.props.player_index.player_match_played}</td>
                                <td>{this.props.player_index.player_goals}</td>
                                <td>{this.props.player_index.player_yellow_cards}</td>
                                <td>{this.props.player_index.player_red_cards}</td>
                                
                            </tr>  
        )
    }
}