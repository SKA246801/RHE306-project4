import React, { useState } from 'react'
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
    </div>
  )
}

export default Map
