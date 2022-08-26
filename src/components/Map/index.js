import { useEffect, useState } from 'react'
import { Map, Marker } from 'pigeon-maps'

import { Wrapper } from './styles'

const Maps = ({ lat, lng }) => {
  const [hue, setHue] = useState(0)
  const [zoom, setZoom] = useState(13)
  const [center, setCenter] = useState([lat, lng])

  const color = `hsl(${hue % 360}deg 39% 70%)`

  useEffect(() => {
    setCenter([lat, lng])
  }, [lng, lat])

  return (
    <Wrapper>
      <Map
        zoom={zoom}
        center={center}
        defaultCenter={center}
        onBoundsChanged={({ center, zoom }) => {
          setZoom(zoom)
          setCenter(center)
        }}
      >
        <Marker
          color={color}
          anchor={center}
          onClick={() => setHue(hue + 20)}
        />
      </Map>
    </Wrapper>
  )
}

export default Maps
