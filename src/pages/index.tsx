import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import nProgress from "nprogress"

import { IoLogoLinkedin } from "react-icons/io"
import { VscChevronRight } from "react-icons/vsc"
import { VscFoldUp, VscTwitter, VscGithub } from "react-icons/vsc"

import Api from "./../services/Api"
import { Map } from "./../components"
import { Wrapper, Header, Dashboard, Content, Footer } from "./../styles/pages/home"

import internet from "./../assets/images/illustrations/internet.svg"
import anonimous from "./../assets/images/illustrations/anonimous.svg"
import connected_world from "./../assets/images/illustrations/connected_world.svg"

const Home: React.FC = () => {
  const [apiData, setApiData] = useState<any>([])
  const [ipAddress, setIpAddress] = useState('')

  const getData = async (value = 'none') => {
    nProgress.start()

    if(value === 'none') {
      const data = await Api.get(`?api-key=${process.env.NEXT_PUBLIC_API_IPDATA_KEY}`)
      .then(response => setApiData(response.data))
      .catch(error => console.log(error.response))

    } else {
      const data = await Api.get(`${ipAddress}?api-key=${process.env.NEXT_PUBLIC_API_IPDATA_KEY}`)
      .then(response => setApiData(response.data))
      .catch(error => console.log(error.response))
    }

    nProgress.done()
  }

  const searchIp = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    getData(ipAddress)
  }

  useEffect(() => {
      getData()
  }, [])

  return (
    <Wrapper>
      <Header>
        <div className="info">
          <p className="country">
            País: <span>{apiData.emoji_flag}</span>
          </p>

          <p className="latitude">
            Latitude: <span>{apiData.latitude}</span>
          </p>

          <p className="longitude">
            Longitude: <span>{apiData.longitude}</span>
          </p>
        </div>

        <div className="menu">
          <Link href="/" target="_self" className="menu__logo">
            IPaddress
          </Link>
        </div>
      </Header>

      <main>
        <Dashboard>
          <div className="content">
            <section className="content--left-side">
              <div className="information">
                <h1 className="information__title">Qual é o seu endereço IP? </h1>

                <h2 className="information__subtitle">{apiData.ip}</h2>

                <ul className="information__list">
                  <li className="list__item list__item--hidden">
                    <p>IPv4: <span>{apiData.ip}</span></p>
                  </li>

                  <li className="list__item list__item--hidden">
                    <p>Continente: <span>{apiData.continent_name}</span></p>
                  </li>

                  <li className="list__item">
                    <p>
                      País:{" "}
                      <span>
                        {apiData.country_name} {apiData.emoji_flag}
                      </span>
                    </p>
                  </li>

                  <li className="list__item">
                    <p>
                      Província: <span>{apiData.region}</span>
                    </p>
                  </li>

                  <li className="list__item">
                    <p>
                      Cidade: <span>{apiData.city}</span>
                    </p>
                  </li>

                  <li className="list__item list__item--hidden">
                    <p>
                      Timezone: <span>{apiData.time_zone?.current_time}</span>
                    </p>
                  </li>

                  <li className="list__item list__item--hidden">
                    <p>
                      Idioma:{" "}
                      <span>
                        {/* {apiData.languages[0]?.name} - {apiData.languages[0]?.code} */}
                      </span>
                    </p>
                  </li>

                  <li className="list__item list__item--hidden">
                    <p>
                      Fornecedor de internet: <span>{apiData.asn?.domain}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            <section className="content--right-side">
                <Map lat={apiData.latitude} lng={apiData.longitude} />
            </section>
          </div>

          <div className="searchInput">
            <form onSubmit={(e) => searchIp(e)}>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Pesquise por um endereço IP"
                min="7"
                max="15"
                onChange={(e) => setIpAddress(e.target.value)}
                required
              />

              <button type="submit">
                <VscChevronRight />
              </button>
            </form>
          </div>
        </Dashboard>

        <Content>
          <section className="firstPost post">
            <h1>O que é um endereço IP?</h1>

            <div className="container">
              <div className="texts">
                <p>
                  Endereço IP significa endereço de protocolo da Internet. Um IP
                  é um número exclusivo atribuído a todos os dispositivos
                  conectados à tecnologia da informação, como impressoras,
                  roteadores, modems e até mesmo geladeiras. O endereço IP
                  identifica e permite que esses dispositivos se comuniquem
                  entre si em uma rede de computadores interna ou externa.
                  Qualquer dispositivo que transmita ou receba tráfego da
                  Internet receberá um endereço IP.
                </p>
              </div>

              <Image
                src={internet}
                alt="Internet image"
                className="images"
              />
            </div>
          </section>

          <section className="secondPost post">
            <h1>Endereços IPv4 e IPv6</h1>

            <div className="container">
              <Image
                src={connected_world}
                alt="Connected_world image"
                className="images"
              />

              <div className="texts">
                <p>
                  IPv4 e IPv6 são os protocolos responsáveis por identificar
                  computadores na Internet e garantir que as informações cheguem
                  ao destino correto. O sistema existe desde o início da rede,
                  mas seu crescimento exponencial levou a uma situação
                  imprevista: a existência de um número maior de dispositivos
                  que os 4,3 milhões de endereços IP disponíveis até então.
                </p>

                <p>
                  Para resolver a problema, várias soluções temporárias foram
                  exploradas, mas a chegada do IPv6 foi crucial para permitir
                  uma quantidade quase infinita de endereços, além de trazer
                  mais segurança e pacotes de dados maiores. Confira a seguir
                  mais detalhes sobre IPv4 e IPv6 e saiba tudo sobre os
                  diferentes protocolos utilizados atualmente.
                </p>
              </div>
            </div>
          </section>

          <section className="thirdPost post">
            <h1>Como ficar anónimo na internet?</h1>

            <div className="container">
              <div className="texts">
                <p>
                  O anonimato e a privacidade não têm a ver com fechar a porta
                  quando você vai ao banheiro. Para as pessoas, esses aspetos
                  podem estar relacionadas à autonomia, liberdade política ou
                  proteção no mundo digital.
                </p>

                <p>
                  Use uma VPN (Virtual Private Network - Rede virtual privada).
                  Uma VPN criptografia tudo o que você faz na internet, mantendo
                  seu tráfego quase que anónimo. A regra geral de uso é, ao usar
                  um serviço consolidado de VPN, toda a sua atividade online
                  permanecerá privada.
                </p>
              </div>

              <Image
                src={anonimous}
                alt="Anonimato image"
                className="images"
              />
            </div>
          </section>
        </Content>
      </main>

      <Footer>
        <ul>
          <li className="list__item
classNa">
            <Link href="https://www.linkedin.com/in/lietsondossanto/" target="_blank">
              <IoLogoLinkedin />
            </Link>
          </li>

          <li className="list__item
classNa">
            <Link href="https://github.com/lietsondossanto" target="_blank">
              <VscGithub />
            </Link>
          </li>

          <li className="list__item
classNa">
            <Link href="https://twitter.com/lietsondossanto" target="_blank">
              <VscTwitter />
            </Link>
          </li>
        </ul>

        <div className="description">
          <h1>IPaddress</h1>

          <p>
            Preocupamos-nos com a sua privacidade. Direitos Reservados&copy;2021-2022
          </p>
        </div>

        <button
          type="button"
          title="Ir para o topo da página"
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
        >
          <VscFoldUp />
        </button>
      </Footer>
    </Wrapper>
  )
}

export default Home
