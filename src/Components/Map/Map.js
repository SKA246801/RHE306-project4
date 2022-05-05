import React, { useState } from 'react'
import './Map.css'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { geoCentroid } from 'd3-geo'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from 'react-simple-maps'

import allStates from '../../assets/data/allstates.json'

import geoUrl from '../../assets/data/states.json'

function Map() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const offsets = {
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10],
    DC: [49, 21],
  }
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1 className='title'>
        The following is a map of the results from the 2020 election
      </h1>
      <div className='race'>
        <div className='img-container'>
          <img
            className='candidate-img-biden'
            src={require('../../assets/images/biden.png')}
            alt='Biden'
          />
        </div>
        <div className='progress-container'>
          <div className='names'>
            <h4 className='biden'>306 Biden</h4>
            <h4 className='trump'>Trump 232</h4>
          </div>
          <div className='progress-bar'>
            a<span>b</span>
          </div>
        </div>
        <div className='img-container'>
          <img
            className='candidate-img-trump'
            src={require('../../assets/images/trump.png')}
            alt='Trump'
          />
        </div>
      </div>
      <ComposableMap projection='geoAlbersUsa'>
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {console.log(geographies)}
              {geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  stroke='#FFF'
                  geography={geo}
                  fill={geo.properties.color}
                />
              ))}
              {geographies.map((geo) => {
                const centroid = geoCentroid(geo)
                const cur = allStates.find((s) => s.val === geo.id)
                return (
                  <g key={geo.rsmKey + '-name'}>
                    {cur &&
                      centroid[0] > -160 &&
                      centroid[0] < -67 &&
                      (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                        <Marker coordinates={centroid}>
                          <text y='2' fontSize={14} textAnchor='middle'>
                            {cur.id}
                          </text>
                        </Marker>
                      ) : (
                        <Annotation
                          subject={centroid}
                          dx={offsets[cur.id][0]}
                          dy={offsets[cur.id][1]}
                        >
                          <text x={4} fontSize={14} alignmentBaseline='middle'>
                            {cur.id}
                          </text>
                        </Annotation>
                      ))}
                  </g>
                )
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
      <div className='legend-container'>
        <div className='legend'>
          <dt className='red key'></dt>
          <dd>Republican</dd>
        </div>
        <div className='legend'>
          <dt className='blue key'></dt>
          <dd>Democrat</dd>
        </div>
        <div className='legend'>
          <dt className='purple key'></dt>
          <dd>Mixed</dd>
        </div>
      </div>
    </div>
  )
}

export default Map
