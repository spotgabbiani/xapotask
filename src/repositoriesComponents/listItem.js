import React, {Component} from "react";

export default class ListItem extends Component {
  render(){
    const { name, watchers_count, loadRepositoryDetails } = this.props;
    return(
      <li className="list-item" name={name} onClick={loadRepositoryDetails}>
        Repository Name: {name} <br/>
        Watchers: {watchers_count}
      </li>
    );
  }
}