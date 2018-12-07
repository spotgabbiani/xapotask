import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {loadRepositories, loadContributors} from "../actions/repositoriesActions";
import ListItem from './listItem';
import pick from 'lodash/pick';
import sortBy from 'lodash/sortBy';
import SelectedRepository from "./selectedRepository";

export class ListLayout extends Component{
  componentDidMount(){
    this.props.actions.loadRepositories();
  }

  loadRepositoryDetails = (e) => {
    this.props.actions.loadContributors(e.currentTarget.attributes.name.value);
  }

  render(){
    const {repositories} = this.props;
    const sortedRepositories = sortBy(repositories, 'watchers_count').reverse();
    return(
          <div className="main-container">
            <section className="repository-list">
            Facebook Repositories

            <ol>
              {sortedRepositories.map((repository)=>{
                const itemProps = pick (
                    {...repository},
                    ['id', 'name', 'watchers_count']
                );
                return <ListItem key={repository.id} {...itemProps} loadRepositoryDetails={this.loadRepositoryDetails} />
              })}
            </ol>
            </section>
            <section className="selected-repository">
              <SelectedRepository />
            </section>
          </div>
    );
  }
}

const mapStateToProps = state => {
  const { repositories } = state.repositoriesReducer;
  return { repositories: repositories }
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ loadRepositories, loadContributors }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(ListLayout)