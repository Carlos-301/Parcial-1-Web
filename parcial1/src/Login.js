import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";

import Col from "react-bootstrap/Col";

function Login() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });

    function handleUserChange(e) {
      setFormValues({...formValues ,email: e.target.value});
    }

    function handlePasswordChange(e) {
      setFormValues({...formValues ,password: e.target.value});
    }

function PostData() {
  const URL = "https://my.api.mockaroo.com/users.json?key=707e27c0";
  const data = {
    email: formValues.email,
    password: formValues.password,
  };

  const validationStates = (() => {
    const emailState = formValues.email.includes("@") && formValues.email.includes(".")
    const passwordState = formValues.password.length >= 9 && formValues.password.match(/[0-9]/g) && formValues.password.match(/[a-z]/g)


    if (emailState && passwordState){
        paintGreen('formBasicEmail')
        paintGreen('formBasicPassword')
        }
    if (!passwordState && control === 1)
    {
        paintRed('formBasicPassword')
    }
    if (passwordState && control === 1){
        paintGreen('formBasicPassword')
    }
    if (!emailState && control === 0)
    {
        paintRed('formBasicEmail')
    }        ;
    return {emailState, passwordState}
    })

return (

    <div>
        <Container> 
          <Row>
            <Col>
            <h1>Tu libreria aliada</h1>
            <Form>
            <Form.Group className="mb-6" controlId="formUser">
            <Form.Label> Username </Form.Label>
            <Form.Control type="user" placeholder="Enter username"
            onChange={handleUserChange} value={formValues.email}/>
            { <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
            onChange={ handlePasswordChange} value={formValues.password} />
            { <Form.Text
            className="text-muted">Your password should be have numbers and letters and
            should be at least 9 char long </Form.Text>}
            </Form.Group>

            <Button variant="primary" onClick={validationStates}>
              Submit
            </Button>
            </Form>
            </Col>
            <Col> sfjesp </Col>
          </Row>
        </Container>
    </div>

)

}
}

export default Login;
