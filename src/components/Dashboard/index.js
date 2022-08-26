import React from 'react'
import { VscChevronRight } from 'react-icons/vsc'

import Map from './../Map'
import GetData from './../../services/GetData'
import { Wrapper, Content, SearchInput } from './styles'

const Dashboard = () => {
  let {
    ip,
    country,
    region,
    city,
    lat,
    lng,
    asn,
    timezone,
    emoji_flag,
    setIpAdress,
    handleSearchIp,
    continent,
    language_name,
    language_code
  } = GetData()

  return (
    <Wrapper>
      <Content>
        <section className="left-side">
          <div className='informationWrapper'>
            <p>Qual é o seu endereço IP? </p>
            <h1 className="ip">{ip}</h1>

            <div className="informations">
              <h2 className="hidden">
                IPv4: <span>{ip}</span>
              </h2>

              <h2 className="hidden">
                Continente: <span>{continent}</span>
              </h2>
              
              <h2>
                País: <span>{country} {emoji_flag}</span>
              </h2>
              
              <h2>
                Província: <span>{region}</span>
              </h2>
              
              <h2>
                Cidade: <span>{city}</span>
              </h2>
              
              <h2 className="hidden">
                Timezone: <span>{timezone}</span>
              </h2>
              
              <h2 className="hidden">
                Idioma: <span>{language_name} - {language_code}</span>
              </h2>
              
              <h2 className="hidden">
                Fornecedor de internet: <span>{asn}</span>
              </h2>
            </div>
          </div>
        </section>

        <section className="right-side">
          <div className="map">
            <Map lat={lat} lng={lng} />
          </div>
        </section>
      </Content>

      <SearchInput>
        <form onSubmit={handleSearchIp}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Pesquise por um endereço IP"
            min="7"
            max="15"
            onChange={e => setIpAdress(e.target.value)}
            required
          />
          <button type="submit">
            <VscChevronRight />
          </button>
        </form>
      </SearchInput>
    </Wrapper>
  )
}

export default Dashboard
