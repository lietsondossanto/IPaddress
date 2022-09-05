import React from "react";
import Link from "next/link";
import Image from "next/image";

import GetData from "./../services/GetData";
import { Dashboard, Footer } from "./../components/index";
import { Info, Content, Menu } from "./../styles/pages/Home";

import internet from "./../assets/images/internet.svg";
import anonimous from "./../assets/images/anonimous.svg";
import connected_world from "./../assets/images/connected_world.svg";

export default function Home() {
  let { lat, lng, emoji_flag } = GetData();

  return (
    <div>
      <header>
        <Info>
          <p className="country">
            País: <span>{emoji_flag}</span>
          </p>

          <p className="latitude">
            Latitude: <span>{lat}</span>
          </p>

          <p className="longitude">
            Longitude: <span>{lng}</span>
          </p>
        </Info>

        <Menu>
          <Link href="/">
            <a target="_self" className="nameOfWebsite">
              IPadress
            </a>
          </Link>
        </Menu>
      </header>

      <main>
        <Dashboard />

        <Content>
          <section className="firstPost">
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

              <div className="images">
                <Image
                  src={internet}
                  alt="Internet image"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </section>

          <section className="secondPost">
            <h1>Endereços IPv4 e IPv6</h1>
            <div className="container">
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

              <div className="images">
                <Image
                  src={connected_world}
                  alt="Connected_world image"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </section>

          <section className="thirdPost">
            <h1>Como ficar anonimo na internet?</h1>
            <div className="container">
              <div className="texts">
                <p>
                  O anonimato e a privacidade não têm a ver com fechar a porta
                  quando você vai ao banheiro. Para as pessoas, esses aspectos
                  podem estar relacionadas à autonomia, liberdade política ou
                  proteção no mundo digital.
                </p>
                <p>
                  Use uma VPN (Virtual Private Network - Rede virtual privada).
                  Uma VPN criptografa tudo o que você faz na internet, mantendo
                  seu tráfego quase que anônimo. A regra geral de uso é, ao usar
                  um serviço consolidado de VPN, toda a sua atividade online
                  permanecerá privada.
                </p>
              </div>

              <div className="images">
                <Image
                  src={anonimous}
                  alt="Anonimato image"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </section>
        </Content>
      </main>

      <Footer />
    </div>
  );
}
