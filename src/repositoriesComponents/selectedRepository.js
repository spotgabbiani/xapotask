import React, {Component, Fragment} from "react";
import {connect} from "react-redux";

export class SelectedRepository extends Component{
  render(){
    const { name, description, clone_url, forks, open_issues, html_url, watchers, license, contributors } = this.props;
    const renderContributor = (contributor) =>(
      <li key={contributor.id} className="contributor">
        <div>
          <img className="avatar-picture" src={contributor.avatar_url} alt=""/>
        </div>
        <div>
          <p>Username: {contributor.login}</p>
          <p>Contributions: {contributor.contributions}</p>
          <p>github profile: <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">{contributor.html_url}</a></p>
        </div>
      </li>
  )
    return(
        <Fragment>
          {!name ? (
            <div>
              <h4>Select something from the list to see the details.</h4>
            </div>) : (
                <Fragment>
                  <h1>{name}</h1>
                  <h4>{description}</h4>
                  <p>Open Issues: {open_issues}</p>
                  <p>See it on the web: <a href={html_url} target="_blank" rel="noopener noreferrer">{html_url}</a></p>
                  <p>This project has {forks} forks</p>
                  <p>Number of watchers: {watchers}</p>
                  <p>License: {license.name}</p>
                  <p>Clone it: {clone_url}</p>
                  <a className="twitter-share-button"
                     href={`https://twitter.com/intent/tweet?text=Check%20this%20project%20${html_url}`}
                     target="_blank" rel="noopener noreferrer"
                     data-size="large">
                    <i className="twitter-icon"/>
                    Share it in Twitter</a>
                  <section>
                    {contributors.length > 0 ? (
                    <Fragment>
                      <h2>Here's the people that are contributing to the project</h2>
                      <ul>
                        {contributors.map(renderContributor)}
                      </ul>
                    </Fragment>
                    ) : (
                        <div>
                          There's no one here, run and do something
                        </div>
                    )
                    }
                  </section>
                </Fragment>
          )}
        </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { selectedRepository } = state.repositoriesReducer;
  return { ...selectedRepository };
}

export default connect(mapStateToProps, null)(SelectedRepository)