import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Col from "react-bootstrap/Col";

function Login() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });

    function handleUserChange(e) {
      setFormValues({...formValues ,email: e.target.value});
    }

    const handlePasswordChange = ((e) => { 
      validationStates()
      setFormValues({...formValues, password: e.target.value})
      });
   
  const [state,setState] = useState(0);

  const validationStates = (() => {
    const emailState = formValues.email.includes("@") && formValues.email.includes(".")
    console.log(emailState)
    if (emailState ){
        setState(1)
        }
    if (!emailState )
    {
        paintRed('formUser')
    }        ;
    return {emailState}
    })


    const paintRed = ((e) => {
      document.getElementById(e).style.borderColor = 'red';
      document.getElementById(e).style.borderBlockColor = 'red';
})

const paintGreen = ((e) => {
  document.getElementById(e).style.borderColor = 'lightgreen';
  document.getElementById(e).style.borderBlockColor = 'lightgreen';
})

if (state === 0 ){
  return(
    <div>
        <Container> 
            <h1>Acceder</h1>
            <p>Usa tu cuenta Unialpes</p>
            <Form>
            <Form.Group className="mb-6" controlId="formUser">
            <Form.Label> Username </Form.Label>
            <Form.Control type="user" placeholder="Enter username"
            onChange={handleUserChange} value={formValues.email}/>
            </Form.Group>
            <Container>
              <Row>
                <Col> 
                Crear cuenta
                </Col>
                <Col> 
                <p> Olvidaste el correo electronico? </p>
                </Col>
              </Row> 
              </Container>
            
            <Button variant="primary" onClick={validationStates}>
              Siguiente
            </Button>
            </Form>
        </Container>
    </div>
  )
}
if( state === 1 && validationStates.emailState === true){
return (

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
else{
  return(
    <div>
    <Container> 
        <h1>Acceder</h1>
        <p>Usa tu cuenta Unialpes</p>
        <Form>
        <Form.Group className="mb-6" controlId="formUser">
        <Form.Label> Username </Form.Label>
        <Form.Control type="user" placeholder="Enter username"
        onChange={handleUserChange} value={formValues.email}/>
        </Form.Group>
        <Container>
          <Row>
            <Col> 
            Crear cuenta
            </Col>
            <Col> 
            <p> Olvidaste el correo electronico? </p>
            </Col>
          </Row> 
          </Container>
        
        <Button variant="primary" onClick={validationStates}>
          Siguiente
        </Button>
        </Form>
    </Container>
</div>
  )
}
}



export default Login;
