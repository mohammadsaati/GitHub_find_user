import React ,{Fragment}from 'react';
import {Link} from 'react-router-dom';

const ReposItem = ({repo}) => {
    return (
        <Fragment>
          <a target="_blank" href={repo.html_url} className="list-group-item">{repo.name}</a>
        </Fragment>
    )
}

export default ReposItem
