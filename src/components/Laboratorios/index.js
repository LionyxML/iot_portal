import React from "react";
import { Container } from "react-bootstrap";
import { GoCloudDownload } from "react-icons/go";
import Equipamento from "../Equipamento";
import Rodape from "../Rodape";
import estacao from "../../img/estacao.png";
import solar from "../../img/solar.png";
import pelton from "../../img/pelton.png";
import hvac from "../../img/hvac.png";
import fp from "../../img/fp.png";
import dash from "../../img/dash.png";
import tot from "../../img/tot.png";

import { AnimateFadeIn1 } from "../Animations/";

import "./index.css";

const Laboratorios = () => {
  return (
    <AnimateFadeIn1>
      <Container className="mt-3">
        <div className="lab__title mx-auto">
          <h2>Laboratório de Energias Renováveis</h2>
          <hr />
          <p>
            Conheça alguns dos equipamentos disponíveis aos nossos alunos para o
            aprendizado prático na área de Energias Renováveis.
          </p>
        </div>

        <Equipamento
          titulo={"Estacao Solarimétrica"}
          foto={estacao}
          descricao={
            <>
              <p>
                A estação solarimétrica é um tipo especial de estação
                meteorológica onde os instrumentos nos proporcionam coletar
                dados importantes para a predição de geração de energia na
                região onde ela está instalada.
              </p>
              <p>
                Já imaginou como podemos ter certeza que uma usina solar ou
                eólica realmente irá gerar energia suficiente em uma determinada
                localidade?
              </p>
              <p>A estação Solarimétrica é a resposta!</p>
            </>
          }
          atributo={
            <>
              <p>
                Nossa estação proporciona a medição e registro das seguintes
                variáveis:
              </p>
              <ul>
                <li>Temperatura (&#176;C)</li>
                <li>Umidade Relativa (%)</li>
                <li>Irradiação Solar (kWh/m&sup2;)</li>
                <li>Velocidaede do Vento (kWh/m&sup2;)</li>
                <li>Direção do vento (&#176;)</li>
              </ul>
              <p>É possível obter registros desde Outubro de 2019!!!</p>
            </>
          }
          video={
            "https://www.youtube-nocookie.com/embed/6rcXCyfVUEA?controls=0"
          }
          documentos={
            <>
              <p>Os manuais desse equipamento podem ser acessados abaixo:</p>
              <ul>
                <li>
                  Manual do Datalogger
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Diagrama Elétrico
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Manual dos Equipamentos
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
              </ul>
            </>
          }
        />

        <Equipamento
          titulo={"Energia Solar"}
          foto={solar}
          descricao={
            <>
              <p>
                Esse é um kit didático destinado ao aprendizado de geração de
                Energia Elétrica Solar em sistemas Off-Grid e Grid-Tie.
              </p>
              <p>
                Já pensou como podemos utilizar a energia solar em nossas vidas?
                Como economizar energia ao mesmo tempo em que ajuda o
                meio-ambiente.
              </p>
            </>
          }
          atributo={
            <>
              <p>
                Esse kit proporciona a possibilidade de aquisição de
                conhecimentos em:
              </p>
              <ul>
                <li>Módulos fotovoltaicos</li>
                <li>String Boxes</li>
                <li>QDCA</li>
                <li>Controladores de carga com e sem MPTT</li>
                <li>Inversor de frequência</li>
                <li>Sistemas Conectados à Rede (On-grid ou Grid-tied)</li>
                <li>Sistemas Desliados da Rede (Off-grid ou isolados)</li>
              </ul>
            </>
          }
          video={"https://www.youtube.com/embed/pHsaAaCII9E"}
          documentos={
            <>
              <p>
                Os manuais e arquivos relevantes desse kit podem ser acessados
                abaixo:
              </p>
              <ul>
                <li>
                  Arquivo 1
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Arquivo 2
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Arquivo 3
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
              </ul>
            </>
          }
        />

        <Equipamento
          titulo={"Energia Hidroelétrica"}
          foto={pelton}
          descricao={
            <>
              <p>Energia gerada pelo movimento de quedas d'água.</p>
              <p>
                Como aproveitar quedas d'água naturais com o mínimo de agressão
                ao meio ambiente? Temos nesse kit uma turbina do tipo Pelton com
                2 injetores reguláveis para estudo e um inversor que faz a
                conversão da energia CC gerada para conexão à rede elétrica.
              </p>
            </>
          }
          atributo={
            <>
              <p>Esse kit didático possibilita:</p>
              <ul>
                <li>Controle de Vazão</li>
                <li>Controle de Pressão</li>
                <li>Simulação de Turbulências</li>
                <li>Controle dos bicos injetores</li>
                <li>Medição em tempo real</li>
                <li>Análise das variáveis Elétricas</li>
              </ul>
            </>
          }
          video={"https://www.youtube.com/embed/JEl_TC2qo5w"}
          documentos={
            <>
              <p>
                Os manuais e arquivos relevantes desse kit podem ser acessados
                abaixo:
              </p>
              <ul>
                <li>
                  Arquivo 1
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Arquivo 2
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Arquivo 3
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
              </ul>
            </>
          }
        />

        <Equipamento
          titulo={"Eficiência em Ventilação e Condicionamento de Ar"}
          foto={hvac}
          descricao={
            <>
              <p>
                Nem só de fontes de energia vive o profissional de Energias
                Renováveis. é também preciso trabalhar para o melhor uso da
                energia consumida.
              </p>
              <p>
                É também preciso trabalhar para o melhor uso da energia
                consumida. Nesse kit trabalhamos formas melhorar o consumo
                energia em sistemas de Aquecimento, Ventilação e Condicionamento
                de ar.
              </p>
            </>
          }
          atributo={
            <>
              <p>Com esse equipamento é possível:</p>
              <ul>
                <li>Experimentar com diversos tipos de ventiladores</li>
                <li>Calcular o consumo de condicionameto de ar</li>
                <li>Calcular o consumo de aquecimento de ar</li>
                <li>Gerar gráficos</li>
                <li>Analisar consequências de tomadas de decisões</li>
              </ul>
            </>
          }
          video={"https://www.youtube.com/embed/eEJtwBDE9Zs"}
          documentos={
            <>
              <p>Os manuais desse equipamento podem ser acessados abaixo:</p>
              <ul>
                <li>
                  Arquivo1
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Arquivo2
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Arquivo3
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
              </ul>
            </>
          }
        />

        <Equipamento
          titulo={"Controle de Demanda e Fator de Potência"}
          foto={fp}
          descricao={
            <>
              <p>
                Como a energia elétrica que chega em casa é invisível, temos de
                dispor de formas de medição e controle para a "saúde" de nossa
                rede.
              </p>
              <p>
                Com esse kit, podemos monitorar o excedente reativo e tomar
                ações de controle. Também é possível monitorar a demanda de
                forma à garantir que nunca seja ultrapassado o máximo de
                contrato, evitando multas e disperdício.
              </p>
            </>
          }
          atributo={
            <>
              <p>Nosso kit didático proporciona experimentos em:</p>
              <ul>
                <li>Cargas Indutivas, Capacitivas e Resistivas</li>
                <li>Adição de capacitores </li>
                <li>Medição de Fator de Potência</li>
                <li>Medição de Demanda</li>
                <li>Medição de Indicadores de qualidade de energia</li>
              </ul>
            </>
          }
          video={"https://www.youtube.com/embed/vAK6hBRkUak"}
          documentos={
            <>
              <p>Os manuais desse equipamento podem ser acessados abaixo:</p>
              <ul>
                <li>
                  Arquivo1
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Arquivo2
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Arquivo3
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
              </ul>
            </>
          }
        />

        <Equipamento
          titulo={"Dashboard de Monitoramento"}
          foto={dash}
          descricao={
            <>
              <p>
                Em um mundo onde existem diversos fabricamentes de equipamentos,
                cada qual com uma solução para problemas. É natural que
                precisemos de muitos programas de computador para obter os
                diversos resultados possíveis.
              </p>
              <p>
                Nesses dashboards, implementamos uma solução de agregação de
                resultados. Onde é possível obter todas as informações em
                plataforma própria, sendo possível disponibilizá-las ao público
                sem a necessidade de compartilhamento de senhas, contas ou
                outros problemas de segurança.
              </p>
              <p>Esse site é justamente o tal dashboard compartilhável :)</p>
            </>
          }
          atributo={
            <>
              <p>Nosso site/dashboard permite:</p>
              <ul>
                <li>Conhecer os equipamentos do laboratório</li>
                <li>Ter acesso à manuais de equipamentos</li>
                <li>Acessar dados meteorológicos e de consumo de energia</li>
                <li>Utilizar equipamentos remotos</li>
                <li>Acessar dados de geração de energia e consumo de água</li>
              </ul>
            </>
          }
          video={"https://www.youtube.com/embed/vDAUid5hYcI"}
          documentos={
            <>
              <p>Os manuais desse equipamento podem ser acessados abaixo:</p>
              <ul>
                <li>
                  Aquivo 1
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Arquivo 2
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Arquivo 3
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
              </ul>
            </>
          }
        />

        <Equipamento
          titulo={"Simulador para Caldeira de Biomassa"}
          foto={tot}
          descricao={
            <>
              <p>
                Você certamente já ouviu falar em reaproveitar bagaço de
                cana-de-açúcar, cavacos e fluidos resultantes de processos.
              </p>
              <p>
                Utilizando caldeiras específicas para geração de energia por
                esses combustíveis, temos a possibilidade de gerar energia
                elétrica. Essas usinas são gigantes e praticamente impossíveis
                de caberem em um laboratório, mesmo miniaturizadas.
              </p>
              <p>
                Por esse motivo, utilizamos um simulador onde o aluno poderá
                realizar diversas operaçãoes como se estivesse no comando de uma
                usina real.
              </p>
            </>
          }
          atributo={
            <>
              <p>Nosso ismulador proporciona:</p>
              <ul>
                <li>Curva de geração por combustível</li>
                <li>Partida de Caldeira</li>
                <li>Parada Momentânea da Caldeira</li>
                <li>Parada Total da Caldeira</li>
                <li>Ações de Contingenciamento</li>
              </ul>
            </>
          }
          video={"https://www.youtube.com/embed/vDAUid5hYcI"}
          documentos={
            <>
              <p>Os manuais desse equipamento podem ser acessados abaixo:</p>
              <ul>
                <li>
                  Arquivo 1
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Arquivo 2
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
                <li>
                  Arquivo 3
                  <a href="/#">
                    <GoCloudDownload />
                  </a>
                </li>
              </ul>
            </>
          }
        />
      </Container>
      <Rodape />
    </AnimateFadeIn1>
  );
};

export default Laboratorios;
