import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {loadRepositories} from "./actions/repositoriesActions";

export class ListLayout extends Component{
  componentDidMount(){
    this.props.actions.loadRepositories();
  }
  render(){
    const {repositories} = this.props;
    return(
        <div>
          {repositories.map((repository)=>{
            return repository.name;
          })}
        </div>
    );
  }
}

const mapStateToProps = state => {
  const { repositories } = state.repositoriesReducer;
  return { repositories: repositories }
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ loadRepositories }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(ListLayout)