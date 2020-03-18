import React from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";

export default function Panel() {
  const langs = [
    { lang: "en", voice: "bright" },
    { lang: "fr", voice: "pat" },
    { lang: "it", voice: "ken" }
  ];

  return (
    <Form>
      <Row>
        {/* text box */}
        <Col lg="8">
          <Alert variant="warning" dismissible>
            <Alert.Heading>Attention!!!</Alert.Heading>
            <p>
              The web speech (SpeechSynthesis) API is experimental, it&#39;s not
              guaranteed to work on all device. It may probably work on all
              recent and up-to-date browsers excluding internet explorer
            </p>
          </Alert>
          <Form.Group controlId="speechText">
            <Form.Label className="font-weight-bold">
              Type some experimental text in the box below
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="7"
              placeholder="Start typing..."
            />
          </Form.Group>
        </Col>
        {/* control buttons */}
        <Col lg="4" className="p-3 p-lg-5 border rounded bg-light text-info">
          <Form.Group controlId="speechLang">
            <Form.Label className="font-weight-bold">Language</Form.Label>
            <Form.Control as="select">
              {langs.map((lang, indx) => (
                <option key={indx}>
                  {lang.lang} - {lang.voice}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="speechVoice">
            <Form.Label className="font-weight-bold">Voice</Form.Label>
            <Form.Control as="select">
              {langs.map((lang, indx) => (
                <option key={indx}>
                  {lang.lang} - {lang.voice}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="speechVol">
            <Form.Label className="font-weight-bold">Volume</Form.Label>
            <Form.Control type="range" />
          </Form.Group>
          <Form.Group controlId="speechRate">
            <Form.Label className="font-weight-bold">Rate</Form.Label>
            <Form.Control type="range" />
          </Form.Group>
          <Form.Group controlId="speechPitch">
            <Form.Label className="font-weight-bold">Pitch</Form.Label>
            <Form.Control type="range" />
          </Form.Group>
          <Button type="button" variant="danger" className="btn-block">
            Read my text
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
