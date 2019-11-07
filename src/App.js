import React, { Component } from "react";
import AllTeams from "./Primer League/All teams/AllTeams";
import Best from "./Primer League/Best Players/Best";
import BestGolies from "./Primer League/Best golies/BestGolies";
import Home from "./Home";
import axios from "axios";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch,NavLink} from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import Team from "./Primer League/All teams/Team";
import "./Back.css"
export default class App extends Component {
  state = {
    data: [],
    res: [],
  }
  componentDidMount() {
    axios.get('https://apiv2.apifootball.com/?action=get_teams&league_id=148&APIkey=92de7aaa81de5ed8cb33704389ff2af0b5e1edd10750e6e089f3ed8219db8bf1')
      .then(res => {
        this.setState({ data: res.data })
      })
  }
  render() {
    return (
        <BrowserRouter>
          <Navbar   fixed="top" variant="dark" style={{ opacity: '0.8' }}>
          <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"
        width="90"
        height="30"
        className="d-inline-block align-top"
      />
      {''}
    </Navbar.Brand>

            <Nav >
            <NavLink className="nav-link" to="/Home" >Home</NavLink>
              <NavLink className="nav-link" to="/AllTeams" >All Teams</NavLink>
              <NavLink className="nav-link" to="/BestPlayers" >Best Players</NavLink>
              <NavLink className="nav-link" to="/BestGolies" >Best Goalies</NavLink>
            </Nav>
          </Navbar>
          <Nav >
          </Nav>
          <Switch>
          <Route path="/AllTeams/:name" render={ (props)=> <Team {...props}  team={ this.state.data.length == 0?   0 : this.state.data.filter(ele =>{
        return  props.match.params.name == ele.team_name            
          }) }/>} />
            <Route path="/Home" render={ ()=> <Home team={this.state.data}/>} />
            <Route path="/AllTeams" render={ ()=> <AllTeams team={this.state.data}/>} />
            <Route path="/BestPlayers" render={ ()=> (this.state.data) ? (<Best team={this.state.data}/>) : null} />
            <Route path="/BestGolies" render={ ()=> <BestGolies team={this.state.data}/>} />
          </Switch>
        </BrowserRouter>
    )
  }
}