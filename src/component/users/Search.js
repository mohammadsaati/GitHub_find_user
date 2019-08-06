import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text :''
    };
    onChange = e => this.setState({ [e.target.name] : e.target.value});
    onSubmit = e => {
        e.preventDefault();
        if(this.state.text == '') {
            this.props.setAlert('Please write some charakter to find ... ' , 'danger')
        }else {
            this.props.searchUsers(this.state.text);
            this.setState({text : ''});
        }
    };

    render() {
        return (
            <div>
              <form onSubmit = {this.onSubmit}>
                  <input type="text" onChange={this.onChange} className="form-control mb-2 mt-4" value={this.state.text} placeholder="Search user ...." name="text"  />
                  <input type="submit" className="btn btn-danger" style={{ width :'100%' }} value="Search" />
              </form> 
              {
                this.props.showClear && (
                    <button className="btn btn-outline-warning mt-2" style={{ width:'100%' }} onClick={this.props.clearUsers}>Clear users</button> 
                )
              }
            </div>
        )
    }
}

export default Search
