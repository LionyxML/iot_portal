import React from "react";
import { Container, Tab, Row, Col, ListGroup } from "react-bootstrap";
import { TiChevronRightOutline } from "react-icons/ti";
import { MdPhotoCamera } from "react-icons/md";
import { IoMdText } from "react-icons/io";
import { FaTemperatureLow, FaVideo } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { GoCloudDownload } from "react-icons/go";
import "./index.css";

const Equipamento = (props) => {
  return (
    <Container className="mx-auto md equipamento--with-border">
      <Tab.Container id="equipamento__tabs" defaultActiveKey="#link0">
        <h3>
          <TiChevronRightOutline />
          {props.titulo}
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
                <img src={props.foto} alt="Logo" className="equipamento__img" />
              </Tab.Pane>
              <Tab.Pane eventKey="#link1">{props.descricao}</Tab.Pane>
              <Tab.Pane eventKey="#link2">{props.atributo}</Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <iframe
                  width="100%"
                  height="315"
                  src={props.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">{props.documentos}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Equipamento;
