import React from "react";
import { Container, Tab, Row, Col, ListGroup } from "react-bootstrap";
import estacao from "../../img/estacao.png";
import "./index.css";
import { TiChevronRightOutline } from "react-icons/ti";
import { MdPhotoCamera } from "react-icons/md";
import { IoMdText } from "react-icons/io";
import { FaTemperatureLow, FaVideo } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { GoCloudDownload } from "react-icons/go";

const Laboratorios = () => {
  return (
    <Container className="mt-3">
      <h2>Laboratório de Energias Renováveis</h2>
      <hr />
      <p>
        Conheça alguns dos equipamentos disponíveis aos nossos alunos para o
        aprendizado prático na área de Energias Renováveis.
      </p>

      <Container
        className="mx-auto md container--with-border"
        style={{ maxWidth: "850px" }}
      >
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link0">
          <h3>
            <TiChevronRightOutline />
            Estação Solarimétrica
          </h3>
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#link0">
                  <MdPhotoCamera />
                  &nbsp;Foto
                </ListGroup.Item>
                <ListGroup.Item action href="#link1">
                  <IoMdText />
                  &nbsp;Descrição
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  <FaTemperatureLow />
                  &nbsp;Atributos
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  <FaVideo />
                  &nbsp;Vídeo
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                  <ImAttachment />
                  &nbsp;Documentos
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link0">
                  <img
                    src={estacao}
                    alt="Logo"
                    style={{ borderRadius: "2px", width: "100%" }}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="#link1">
                  <p>
                    A estação solarimétrica é um tipo especial de estação
                    meteorológica onde os instrumentos nos proporcionam coletar
                    dados importantes para a predição de geração de energia na
                    região onde ela está instalada.
                  </p>
                  <p>
                    Já imaginou como podemos ter certeza que uma usina solar ou
                    eólica realmente irá gerar energia suficiente em uma
                    determinada localidade?
                  </p>
                  <p>A estação Solarimétrica é a resposta!</p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
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
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/6rcXCyfVUEA?controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <p>
                    Os manuais desse equipamento podem ser acessados abaixo:
                  </p>
                  <ul>
                    <li>
                      Manual do Datalogger{" "}
                      <a href="/#">
                        <GoCloudDownload />
                      </a>
                    </li>
                    <li>
                      Diagrama Elétrico{" "}
                      <a href="/#">
                        <GoCloudDownload />
                      </a>
                    </li>
                    <li>
                      Manual dos Equipamentos{" "}
                      <a href="/#">
                        <GoCloudDownload />
                      </a>
                    </li>
                  </ul>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Container>
  );
};

export default Laboratorios;
