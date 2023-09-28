
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Col from "react-bootstrap/Col";

function LoginPass() {
  const [formValues, setFormValues] = useState({ password: "" });

    function handlePasswordChange(e) {
      setFormValues({...formValues ,password: e.target.value});
    }
   
  const [control,setcontrol] = useState(null);

  const validationStates = (() => {
    const emailState = formValues.email.includes("@") && formValues.email.includes(".")
    const passwordState = formValues.password.length >= 9 && formValues.password.match(/[0-9]/g) && formValues.password.match(/[a-z]/g)},[])

return(
    <Form>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"
      onChange={ handlePasswordChange} value={formValues.password} />
      { <Form.Text
      className="text-muted">Your password should be have numbers and letters and
      should be at least 9 char long </Form.Text>}
      </Form.Group>

      <Button variant="primary" onClick={validationStates}>
        Siguiente
      </Button>
      </Form>
  );
  }
  export default LoginPass;