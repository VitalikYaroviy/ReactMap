/* eslint-disable eol-last */
/* global FB myMap, google, myMap*/

import React, {Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import './googlemap.css'

class GoogleMap extends Component {
  mapClicked = (mapProps, map, clickEvent) => {
    let list = this.props.places
    list.push({
      title: '',
      description: '',
      latLng: {lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()}
    })
    this.setState({places: list})
    this.props.newPlace(list)
  }

  searchMarker = (mapProps) => {
    let form = document.getElementById(mapProps.id)
    form.style.border = 'solid 4px black'
  }

  cancelMarker = (mapProps) => {
    let form = document.getElementById(mapProps.id)
    form.style.border = 'dotted 2px black'
  }

  movingMarker = (mapProps, map, even) => {
    this.props.changePosition('latLng', {lat: even.latLng.lat(), lng: even.latLng.lng()}, mapProps.id)
    this.setState({
      selectedPlace: mapProps,
      activeMarker: map,
      showingInfoWindow: true
    })
  }
  changeInput = (e) => {
    let list = this.props.places
    this.props.places[e.target.form.id][e.target.name] = e.target.value
    this.setState({places: list})
    this.props.addInfo(list)
  }
  removeMarker = (e) => {
    this.props.removeElement(this.props.places, e.target.form.id)
    const list = this.props.places
    this.setState({places: list})
  }

  render() {
    const style = {
      width: '50%',
      height: '750px',
      position: 'relative'
    }
    let dragIndex = null
    return (
      <div>
        <Map style={style} google={this.props.google} zoom={15} initialCenter={{lat: 49.444185, lng: 32.059224}}
             onClick={this.mapClicked}>
          {this.props.places.map((element, index) => {
            return (
              <Marker
                title={this.props.places[index].title}
                draggable
                key={index}
                id={index}
                name={'Name'}
                onMouseover={this.searchMarker}
                onMouseout={this.cancelMarker}
                onMouseup={this.movingMarker}
                position={{lat: element.latLng.lat, lng: element.latLng.lng}}

              />
            )
          })}
        </Map>
        <div className={'info'}>INFORMATION
          {this.props.places.map((element, index) => {
            return (
              <form id={index}
                    key={index}
                    draggable
                    onDragEnd={(e) => {this.props.changeSort(e.target.id, dragIndex, this.props.places)}}
                    onDragOver={(e) => {if (e.target.id) {dragIndex = e.target.id}}}>
                <p>Title</p>
                <input name={'title'}
                       onChange={event => this.changeInput(event)}
                       value={this.props.places[index].title}/>
                <p>Description</p>
                <input name={'description'}
                       onChange={event => this.changeInput(event)}
                       value={this.props.places[index].description}/>
                <input type='button' value='Delete' className={'button'} onClick={this.removeMarker}/>
              </form>)})}
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDrGofO--bqfw43Yeu3D7MhnAadkFfwg90')
})(GoogleMap)