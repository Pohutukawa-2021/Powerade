import React, { useState } from 'react'
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

function Chatroom() {
  const [message, setMessage] = useState('')

  function handleClick(event) {
    event.preventDefault()
    console.log(message)
  }

  function handleTextChange(event) {
    const text = event.target.value
    setMessage(text)
  }

  function isForMe(username) {
    return username.toLowerCase() == 'ali' ? 'auto' : 'none'
  }

  return (
    <div className="chatroom pt-6">
      <Container fluid className="messagesContainer">
        <Row>
          {messages.map((element) => (
            <Col
              xs={7}
              key={Math.random()}
              style={{ 'margin-left': isForMe(element.username) }}
              className="p-2"
            >
              <div className="messageBox border border-1 rounded">
                <p>{element.username}</p>
                <p>{element.message}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Form className="p-2 chatForm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            onChange={handleTextChange}
            as="textarea"
            defaultValue="Enter your message here"
            rows={3}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Chatroom
