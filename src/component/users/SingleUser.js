import React, { Component  , Fragment} from 'react';
import Repos from '../reposes/Repos';

export class SingleUser extends Component {
    componentDidMount() {
        this.props.getSignleUser(this.props.match.params.login);
        this.props.getUserRpose(this.props.match.params.login);
    }
    
    render() {
        const {singleUser} = this.props;
        return (
          <Fragment>
              <div className="card mb-3 mt-3" style ={{ maxWidth :'100%' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                         <img src={singleUser.avatar_url} className="card-img" alt="..." />
                     </div>
                     <div className="col-md-8">
                    <div className="card-body">
                         <h5 className="card-title">{singleUser.name}</h5>
                         <p className="card-text">{singleUser.bio}</p>
                     </div>
    
                     </div>             
                </div>
              </div>
              <div className="mt-6 row text-center">
                  <div className = "col-3 bg-primary list-group-item text-center">follower : {singleUser.followers}</div>&nbsp;&nbsp;
                  <div className = "col-3 bg-success list-group-item  text-center">following : {singleUser.following}</div>&nbsp;&nbsp;
                  <div className = "col-3 bg-danger list-group-item text-center">repose : {singleUser.public_repos}</div>&nbsp;&nbsp;
              </div>
              <br/>
             <h3>Repose : </h3>
             <br/>
              <div className = "mt-6 mb-6">
                <ul className="list-group">
                <Repos repos = {this.props.repos}/>
                </ul>
              </div>
              <br/>
          </Fragment>
        )
    }
}

export default SingleUser
