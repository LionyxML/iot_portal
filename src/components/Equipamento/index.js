import React from "react";
import { Container, Tab, Row, Col, ListGroup } from "react-bootstrap";
import { TiChevronRightOutline } from "react-icons/ti";
import { MdPhotoCamera } from "react-icons/md";
import { IoMdText } from "react-icons/io";
import { FaTemperatureLow, FaVideo } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { AnimateFadeIn1, AnimateFadeIn3 } from "../Animations/";
import "./index.css";

const Equipamento = (props) => {
  return (
    <AnimateFadeIn3>
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
                  <AnimateFadeIn1>
                    <img
                      src={props.foto}
                      alt="Logo"
                      className="equipamento__img"
                    />
                  </AnimateFadeIn1>
                </Tab.Pane>
                <Tab.Pane eventKey="#link1">
                  <AnimateFadeIn1>{props.descricao}</AnimateFadeIn1>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <AnimateFadeIn1>{props.atributo}</AnimateFadeIn1>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <AnimateFadeIn1>
                    <iframe
                      width="100%"
                      height="315"
                      src={props.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </AnimateFadeIn1>
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <AnimateFadeIn1>{props.documentos}</AnimateFadeIn1>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </AnimateFadeIn3>
  );
};

export default Equipamento;
