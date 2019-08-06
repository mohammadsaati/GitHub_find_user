import React , {Component , Fragment} from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import Search from './component/users/Search';
import Alert from './component/layout/Alert';
import About from './component/pages/About';
import SingleUser from './component/users/SingleUser';
import axios from 'axios';
import './App.css';


class App extends Component{
  state = {
    users : [],
    repos : [],
    singleUser : {},
    alert : null
  }
  // async componentDidMount() {
  //   const res = await axios.get('https://api.github.com/users');

  //   this.setState({users : res.data});
   
  // }
  searchUsers = async (text) => {
    const response = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({users : response.data.items});
  }
  clearUsers =() => this.setState({users : []});
  setAlert = (msg , type) => {
     this.setState({alert : {msg , type}});
     setTimeout(() => this.setState({alert : null}) , 3000);
     if(this.state.users.length > 0) {
       this.setState({alert : null});
     }
  }
  getSignleUser = async (userName) => {
    const res = await axios.get(`https://api.github.com/users/${userName}`);
    this.setState({singleUser : res.data});
  }
  getUserRpose = async (userName) => {
    const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5`);  
    this.setState({repos : res.data});
    console.log(res.data);
  }
  render() {

    return (
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
          <Alert alert = {this.state.alert} />
          <Switch>
            <Route exact path='/' render = {props => (
                <Fragment>
                     <Search 
                      searchUsers={this.searchUsers}
                      clearUsers = {this.clearUsers}
                      showClear = {this.state.users.length > 0 ? true : false}
                      setAlert = {this.setAlert}
                      />
                    <Users users = {this.state.users} />
                </Fragment>
            )} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" render = {props => (
              <SingleUser {...props} 
              getSignleUser = {this.getSignleUser} 
              singleUser = {this.state.singleUser}
              getUserRpose = {this.getUserRpose}
              repos = {this.state.repos}
              />
            ) }/>

          </Switch>
           
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
