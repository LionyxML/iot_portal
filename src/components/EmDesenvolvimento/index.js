import React from "react";
import { Alert } from "react-bootstrap";

const EmDesenvolvimento = () => {
  return (
    <Alert className="mt-3 w-50 mx-auto mt-5" variant="success">
      <Alert.Heading>Ahh... que pena!</Alert.Heading>
      <hr />
      <p>Você tentou acessar uma página que ainda está em desenvolvimento...</p>
      <p>Volte em breve!</p>
    </Alert>
  );
};

export default EmDesenvolvimento;
