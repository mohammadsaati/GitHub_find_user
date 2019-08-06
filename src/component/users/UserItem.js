import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = ({user:{login , avatar_url , html_url}}) => {
        return (
           <div className="col-xl-3 col-md-12">
                <div className="card  mt-4">
                <img src={avatar_url} alt="" className="card-img-top" />
                <div className="card-body text-content">
                    <p className="card-text">{login}</p>
                    <Link to={`/user/${login}`}  className="btn btn-success mt-4">More...</Link>
                </div>
                </div>
           </div>
         
        )
}

export default UserItem
