import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MoreOptions from './MoreOptions'
let date = require('date-and-time');

export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStory: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    return this.setState({ selectedStory: !this.state.selectedStory })
  }
  render() {
    const articleSource = this.props.articleInfo.source
    let now = new Date(this.props.articleInfo.publishedAt)
    const newDate = date.format(now, 'YYYY/MM/DD HH:mm:ss')
    const articleInfo = this.props.articleInfo
    return (
      <div className="left-align article z-depth-1 hoverable">
        <div className="row">
          <div className="col s6">
            <h4>{newDate}</h4>
          </div>
          <div className="col s6 right-align">
            <a className="infoLink" href="#"><p onClick={this.handleClick} >more info </p></a>
          </div>

        </div>
        <a target="_blank" className="headlineURL" href={this.props.articleInfo.url}><h2>{this.props.articleInfo.title}</h2></a>
        <Link to={`/source/${articleSource.id}`}><h3>{this.props.articleInfo.source.name}</h3> </Link>
        {this.state.selectedStory ? <MoreOptions articleInfo={articleInfo} /> : null}
      </div >
    )
  }
}



    // link the source name to the page with only that particular source.
    // set the sourcemane selected as the url when searching
    // pass the selectedName down to this component
    // use that props to link to source page, display similar source articles


//generally, clean up unused components and stuff (ie router stuff)