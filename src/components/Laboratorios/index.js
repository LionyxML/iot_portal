import React from "react";
import { Container, Tab, Row, Col, ListGroup } from "react-bootstrap";
import estacao from "../../img/estacao.png";
import "./index.css";

const Laboratorios = () => {
  return (
    <Container className="mt-3">
      <h2>Laboratório de Energias Renováveis</h2>
      <hr />
      <p>
        Conheça alguns dos equipamentos disponíveis aos nossos alunos para o
        aprendizado prático na área de Energias Renováveis.
      </p>

      <Container className="mx-3 container--with-border">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link0">
          <h3>Estação Solarimétrica</h3>
          <Row>
            <Col sm={3}>
              <ListGroup>
                <ListGroup.Item action href="#link0">
                  Foto
                </ListGroup.Item>
                <ListGroup.Item action href="#link1">
                  Descrição
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Medições
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  Vídeo
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                  Documentos
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
                    <li>Temperatura (graus C)</li>
                    <li>Umidade Relativa (%)</li>
                    <li>Irradiação Solar (kWh/m2)</li>
                    <li>Velocidaede do Vento (kWh/m2)</li>
                    <li>Direção do vento (graus)</li>
                  </ul>
                  <p>É possível obter registros desde Dez/2019!!!</p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/6rcXCyfVUEA?controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  Os manuais desse equipamento podem ser acessados abaixo:
                  <ul>
                    <li>Manual do Datalogger</li>
                    <li>Diagrama Elétrico</li>
                    <li>Manual dos Equipamentos</li>
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
