import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const messages = [
  {
    username: 'Ali',
    message: 'I like coding'
  },
  {
    username: 'Austin',
    message: 'I like coding'
  },
  {
    username: 'Ali',
    message: 'I like coding'
  }
]

function Chatroom () {
  function handleClick () {
    console.log('handleclick is here')
  }
  return (
    <div className = 'chatroom'>
      <Container fluid>
        <Row>
          {messages.map(element => <Col xs={12} key={Math.random()}><p>{element.username}</p><p>{element.message}</p></Col>)}
        </Row>
      </Container>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" defaultValue="Enter your message here" rows={3}/>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleClick}>
    Submit
        </Button>
      </Form>
    </div>
  )
}

export default Chatroom
