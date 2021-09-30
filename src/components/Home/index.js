import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";

const Home = () => {
  return (
    <Container fluid className="p-0">
      <Container
        fluid
        className="jumbotron jumbotron-fluid p-0 mx-auto hero__image"
      >
        <Container className="center p-4 hero__text">
          <h1 className="display-4">Olá! Você chegou!</h1>
          <p className="lead">
            Esse é o portal do laboratório de Energias Renováveis do Instituto
            SENAI em Energia "Comendador Santoro Mirone" de Indaiatuba-SP
          </p>
          <p className="lead">
            Utilize a barra de navegação para conhecer o site!
          </p>
        </Container>
      </Container>

      <Container fluid className="p-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="waves"
        >
          <path
            fill="#ff0000"
            fillOpacity="0.77"
            d="M0,64L12.6,58.7C25.3,53,51,43,76,58.7C101.1,75,126,117,152,122.7C176.8,128,202,96,227,112C252.6,128,278,192,303,208C328.4,224,354,192,379,170.7C404.2,149,429,139,455,128C480,117,505,107,531,122.7C555.8,139,581,181,606,186.7C631.6,192,657,160,682,138.7C707.4,117,733,107,758,117.3C783.2,128,808,160,834,160C858.9,160,884,128,909,101.3C934.7,75,960,53,985,90.7C1010.5,128,1036,224,1061,240C1086.3,256,1112,192,1137,170.7C1162.1,149,1187,171,1213,149.3C1237.9,128,1263,64,1288,85.3C1313.7,107,1339,213,1364,240C1389.5,267,1415,213,1427,186.7L1440,160L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
          ></path>
        </svg>
      </Container>
    </Container>
  );
};

export default Home;
