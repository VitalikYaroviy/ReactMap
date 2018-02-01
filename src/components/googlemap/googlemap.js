/* global FB myMap, google, myMap*/

import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

let ReactDragList = require('react-drag-list')
// import PropTypes from 'prop-types'

import './googlemap.css'

class Googlemap extends Component {
  constructor (props) {
    super(props)
    this.mapClicked = this.mapClicked.bind(this)
    this.searchMarker = this.searchMarker.bind(this)
    this.readInput = this.readInput.bind(this)
    this.removeMarker = this.removeMarker.bind(this)
    this.cancelMarker = this.cancelMarker.bind(this)
    this.changeInputTitle = this.changeInputTitle.bind(this)
    this.changeInputDescription = this.changeInputDescription.bind(this)
  }

  mapClicked(mapProps, map, clickEvent) {
    let list = this.props.places
    console.log(this.props.places)

    list.push({
      title: '',
      description: '',
      latLng: {lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()}
    })
    console.log(list)
    this.setState({places: list})
    this.props.newplace(list)
  }

  searchMarker(mapProps) {
    let form = document.getElementById(mapProps.id)
    form.style.border = 'solid 4px black'
  }

  cancelMarker(mapProps) {
    let form = document.getElementById(mapProps.id)
    form.style.border = 'dotted 2px black'
  }

  changeInputTitle(e) {
    let list = this.props.places
    this.props.places[e.target.form.id].title = e.target.value
    this.setState({places: list})
  }

  changeInputDescription(e) {
    let list = this.props.places
    this.props.places[e.target.form.id].description = e.target.value
    this.setState({places: list})
    // this.props.addInfo(list)
  }

  readInput(e) {
    let titleInput = e.target.form[0].value
    let descriptionInput = e.target.form[1].value
    let list = this.props.places
    this.props.places[e.target.form.id].title = titleInput
    this.props.places[e.target.form.id].description = descriptionInput
    this.setState({places: list})
    this.props.addInfo(list)
    console.log(this.props.places)
  }

  removeMarker(e) {
    this.props.removeElement(this.props.places, e.target.form.id)
    const list = this.props.places
    this.setState({places: list})
    // this.props.places[index].title
  }

  render() {
    const style = {
      width: '50%',
      height: '750px',
      position: 'relative'
    }
    console.log(this.props)
    return (
      <div>
        <Map style={style} google={this.props.google} zoom={15} initialCenter={{lat: 49.444185, lng: 32.059224}} onClick={this.mapClicked}>
          {this.props.places.map((element, index) => {
            return (
              <Marker
                // draggable
                key={index}
                id={index}
                name={'Name'}
                onMouseover={this.searchMarker}
                onMouseout={this.cancelMarker}
                position={{lat: element.latLng.lat, lng: element.latLng.lng}}

              />
            )
          })}
        </Map>
        <div className={'info'}>INFO
          <ReactDragList
            dataSource={this.props.places}
            row={(record, index) => <form id={index}>
              <p>Title</p>
              <input
                onChange={event => this.changeInputTitle(event)}
                value={this.props.places[index].title}
              />
              <p>Description</p>
              <input
                onChange={event => this.changeInputDescription(event)}
                value={this.props.places[index].description}
              />
              <input type='button' value='Save' className={'button'} onClick={this.readInput} />
              <input type='button' value='Delete' className={'button'} onClick={this.removeMarker} />
            </form>}
          />
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDrGofO--bqfw43Yeu3D7MhnAadkFfwg90')
})(Googlemap)