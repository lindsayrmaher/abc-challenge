import React, { Component } from 'react'
import * as d3 from "d3"

class D3Graph extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    // In a given example, here's where you instantiate your Google Map
    // IMPORTANT: this.refs.d3 is how we would reference our dummy div below
    // new.google.maps.Map(this.refs.map, {
    //  center: { lat: this.props.lat, lng: this.props.lng }
    //  zoom: 8
    // })

    const width = window.innerWidth
    const height = window.innerHeight
    const svg = d3.select(this.refs.d3)
      .append('svg')
        .attr('width', 500)
        .attr('height', '500px')

    const simulation = d3.forceSimulation()
      .force('charge', d3.forceManyBody().strength(-20))
      .force('center', d3.forceCenter(width / 2, height / 2))
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    // Apply whatever changes you would like given new props here
    // this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng })
  }

  render() {
    return (
      <div id="d3" ref="d3">
        <div>Well helloooo there</div>
      </div>
    )
  }
}

export default D3Graph
