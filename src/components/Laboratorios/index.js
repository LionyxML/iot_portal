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
              <p>É possível obter registros desde Dez/2019!!!</p>
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
              <p>É possível obter registros desde Dez/2019!!!</p>
            </>
          }
          video={"https://www.youtube.com/embed/pHsaAaCII9E"}
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
          titulo={"Energia Hidroelétrica"}
          foto={pelton}
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
              <p>É possível obter registros desde Dez/2019!!!</p>
            </>
          }
          video={"https://www.youtube.com/embed/JEl_TC2qo5w"}
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
          titulo={"Eficiência em Ventilação e Condicionamento de Ar"}
          foto={hvac}
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
              <p>É possível obter registros desde Dez/2019!!!</p>
            </>
          }
          video={"https://www.youtube.com/embed/eEJtwBDE9Zs"}
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
          titulo={"Controle de Demanda e Fator de Potência"}
          foto={fp}
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
              <p>É possível obter registros desde Dez/2019!!!</p>
            </>
          }
          video={"https://www.youtube.com/embed/vAK6hBRkUak"}
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
          titulo={"Dashboard de Monitoramento"}
          foto={dash}
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
              <p>É possível obter registros desde Dez/2019!!!</p>
            </>
          }
          video={"https://www.youtube.com/embed/vDAUid5hYcI"}
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
          titulo={"Simulador para Caldeira de Biomassa"}
          foto={tot}
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
              <p>É possível obter registros desde Dez/2019!!!</p>
            </>
          }
          video={"https://www.youtube.com/embed/vDAUid5hYcI"}
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
      </Container>
      <Rodape />
    </AnimateFadeIn1>
  );
};

export default Laboratorios;
