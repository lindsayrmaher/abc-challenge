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
    let nodes = [
      { id: "mammal", group: 0, label: "Mammals", level: 1 },
      { id: "dog", group: 0, label: "Dogs", level: 2 },
      { id: "cat", group: 0, label: "Cats", level: 2 },
      { id: "fox", group: 0, label: "Foxes", level: 2 },
      { id: "elk", group: 0, label: "Elk", level: 2 },
      { id: "insect", group: 1, label: "Insects", level: 1 },
      { id: "ant", group: 1, label: "Ants", level: 2 },
      { id: "bee", group: 1, label: "Bees", level: 2 },
      { id: "fish", group: 2, label: "Fish", level: 1 },
      { id: "carp", group: 2, label: "Carp", level: 2 },
      { id: "pike", group: 2, label: "Pikes", level: 2 }
    ]

    let links = [
      { target: "mammal", source: "dog", strength: 0.7 },
      { target: "mammal", source: "cat", strength: 0.7 },
      { target: "mammal", source: "fox", strength: 0.7 },
      { target: "mammal", source: "elk", strength: 0.7 },
      { target: "insect", source: "ant", strength: 0.7 },
      { target: "insect", source: "bee", strength: 0.7 },
      { target: "fish", source: "carp", strength: 0.7 },
      { target: "fish", source: "pike", strength: 0.7 },
      { target: "cat", source: "elk", strength: 0.1 },
      { target: "carp", source: "ant", strength: 0.1 },
      { target: "elk", source: "bee", strength: 0.1 },
      { target: "dog", source: "cat", strength: 0.1 },
      { target: "fox", source: "ant", strength: 0.1 },
      { target: "pike", source: "dog", strength: 0.1 }
    ]

    // Setting the variable height/width of the SVG element
    const width = window.innerWidth
    const height = window.innerHeight
    let neighbors = [];

    // Create SVG element and add attributes
    const svg = d3.select(this.refs.d3)
      .append('svg')
        .attr('refs', 'svg')
        .attr('width', width)
        .attr('height', height)

    // Create force simulation for nodes
    const simulation = d3.forceSimulation()
      .force('charge', d3.forceManyBody().strength(-20))
      .force('center', d3.forceCenter(width / 2, height / 2))

    // Generate node colors
    function getNodeColor(node, neighbors) {
      if (neighbors.length > 0 && neighbors.indexOf(node.id)) {
        return node.level === 1 ? 'blue' : 'green'
      }
      return node.level === 1 ? 'red' : 'gray'
    }

    // Create circles (nodes) with information from our nodes array
    const nodeElements = svg.append('g')
      .selectAll(this.refs.circle)
      .data(nodes)
      .enter().append('circle')
        .attr('refs', 'circle')
        .attr('r', 10)
        .attr('fill', getNodeColor)

    // Create labels for our circles with information from our nodes array
    const textElements = svg.append('g')
      .selectAll(this.refs.text)
      .data(nodes)
      .enter().append('text')
        .text(node => node.label)
        .attr('refs', 'text')
        .attr('font-size', 15)
        .attr('dx', 15)
        .attr('dy', 4)

    // Create our tick function, updating our x/y axes for each node on each tick
    simulation.nodes(nodes).on('tick', () => {
      nodeElements
        .attr('cx', node => node.x)
        .attr('cy', node => node.y)
      textElements
        .attr('x', node => node.x)
        .attr('y', node => node.y)
      linkElements
        .attr('x1', link => link.source.x)
        .attr('y1', link => link.source.y)
        .attr('x2', link => link.target.x)
        .attr('y2', link => link.target.y)
    })

    // Create a link force that is related to the link strength in our array of data
    simulation.force('link', d3.forceLink()
      .id(link => link.id)
      .strength(link => link.strength))

    // Create the links themselves
    const linkElements = svg.append('g')
      .selectAll(this.refs.line)
      .data(links)
      .enter().append('line')
      .attr('refs', 'line')
      .attr('stroke-width', 1)
      .attr('stroke', '#3f3f3f')

    // What is the difference between this and line 104? Why can't I combine them?
    simulation.force('link').links(links)

    // Adding drag-and-drop interactivity
    const dragDrop = d3.drag()
      .on('start', node => {
        node.fx = node.x
        node.fy = node.y
      })
      .on('drag', node => {
        simulation.alphaTarget(0.7).restart()
        node.fx = d3.event.x
        node.fy = d3.event.y
      })
      .on('end', node => {
        if (!d3.event.active) {
          simulation.alphaTarget(0)
        }
        node.fx = null
        node.fy = null
      })

    // Remember to not only create the events, but then CALL them!
    nodeElements.call(dragDrop)

    // Highlighting nodes and links based on relationships
    function getNeighbors(node) {
      return links.reduce((neighbors, link) => {
        if (link.target.id === node.id) {
          neighbors.push(link.source.id)
        } else if (link.source.id === node.id) {
          neighbors.push(link.target.id)
        }
        return neighbors
      }, [node.id])
    }

    function isNeighborLink(node, link) {
      return link.target.id === node.id || link.source.id === node.id
    }

    function getTextColor(node, neighbors) {
      return neighbors.indexOf(node.id) ? 'green' : 'black'
    }

    function getLinkColor(node, link) {
      return isNeighborLink(node, link) ? 'green' : '#E5E5E5'
    }

    function selectNode(selectedNode) {
      neighbors = getNeighbors(selectedNode)
      nodeElements
        .attr('fill', node => getNodeColor(node, neighbors))
      textElements
        .attr('fill', node => getTextColor(node, neighbors))
      linkElements
        .attr('stroke', link => getLinkColor(selectedNode, link))
    }

    nodeElements.on('click', selectNode)
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
