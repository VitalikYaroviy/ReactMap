/* global FB myMap, google, myMap*/

import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import PropTypes from 'prop-types'

import './googlemap.css'

class Googlemap extends Component {
    constructor(props) {
        super(props)
        this.mapClicked = this.mapClicked.bind(this)
        this.clickMarker = this.clickMarker.bind(this)
    }

    mapClicked (mapProps, map, clickEvent) {
        let list = this.props.places
        console.log(this.props.places)

        list.push({
            title: 'Hello',
            description: '',
            latLng: {lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()}
        })
        console.log(list)
        this.setState({places: list})
        this.props.newplace(list)
    }

    clickMarker (mapProps) {
     console.log('q')
    }


    render () {
        const style = {
            width: '50%',
            height: '750px',
            position: 'relative'
        }
        console.log(this.props)
            return (
                <Map style={style} google={this.props.google} zoom={15} initialCenter={{lat: 49.444185, lng: 32.059224}} onClick={this.mapClicked}>
                    {this.props.places.map((element, index) => {
                        console.log(element.title)
                        return (
                            <Marker
                                // onClick={this.clickMarker}
                                draggable
                                key={index}
                                id={index}
                                name={'Name'}
                                onMouseover={this.clickMarker}
                                position={{lat: element.latLng.lat, lng: element.latLng.lng}}

                            />
                        )
                    })}
                    <InfoWindow>
                        <div>{'bla'}</div>
                    </InfoWindow>
                </Map>
            )
    }
}

// Googlemap.propTypes = {
//     initMap: PropTypes.func.isRequired
// }
//
// Googlemap.defaultProps = {
//     initMap: () => {}
// }

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDrGofO--bqfw43Yeu3D7MhnAadkFfwg90')
})(Googlemap)

// export default Googlemap