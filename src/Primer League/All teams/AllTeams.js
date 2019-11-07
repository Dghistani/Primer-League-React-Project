import React, { Component } from 'react'
import Cards from './Cards'
import Circle4 from '../animations-yasser-master/LoadingPages/Circle4'
export default class AllTeams extends Component {
  render() {
    // console.log(this.props.team.length );
    var teams = this.props.team.map( item => {
      return <Cards teamName={item.team_name} badgeImg={item.team_badge}/>
    })
    return (
      <div className = "app">
        {this.props.team.length  > 1 ? teams : <Circle4 />}
        {/* {teams} */}
      </div>
    )
  }
}