import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";

export default function Panel() {
  const synthesis = window.speechSynthesis;
  const intro = `Hello user, my name is Chigbogu the developer!, am open to new ideas and cooperation, am a full-stack developer with experiences in Node js, Express js, React js, for collaboration or to get a project proposal, please get in touch.`;
  const [voices, setVoices] = useState([]);
  const [pitch, setPitch] = useState(0.5);
  const [rate, setRate] = useState(2);
  const [volume, setVolume] = useState(0.5);
  const [text, setText] = useState(intro);

  const speechSupport = () => "speechSynthesis" in Window;

  const voicechanged = () => {
    console.log("voices", synthesis.getVoices().length);
    synthesis.getVoices().forEach(voice => {
      setVoices(voices => voices.concat(voice));
      console.log(voice.name, voice.lang);
    });
  };

  const makeWebSpeak = e => {
    e.preventDefault();
    const utterance = new SpeechSynthesisUtterance(text);
    console.log(utterance.lang);
    utterance.pitch = pitch;
    utterance.volume = volume;
    utterance.rate = rate;
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (!speechSupport) return;
    if (!synthesis.onvoiceschanged) synthesis.onvoiceschanged = voicechanged;
    voicechanged();
  },[]);

  return (
    <Form>
      <Row className="">
        {/* text box */}
        <Col lg="8">
          <Alert variant="warning" dismissible>
            <Alert.Heading>Attention!!!</Alert.Heading>
            <p>
              The <i>Speech Synthesis API</i> is an awesome API, great to experiment
              new kind of interfaces and let the browser talk to you. <br/>It&#39;s
              part of the <i>Web Speech API</i>, along with the <i>Speech Recognition API</i>,
              which is only currently supported, in experimental mode, on Chrome.
              <br />
              <strong>Maximum of 32767 characters</strong>
            </p>
          </Alert>
          <Form.Group controlId="speechText">
            <Form.Label className="font-weight-bold">
              Type some text in the box below
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="7"
              placeholder="Start typing..."
              value={text}
              onChange={e => setText(e.target.value)}
              minLength="1"
              maxLength="32767"
              autoCapitalize="characters"
              autoFocus
            />
            <Button
              type="button"
              variant="danger"
              className="btn-block my-3"
              onClick={makeWebSpeak}
            >
              Read Text
            </Button>
          </Form.Group>
        </Col>
        {/* control buttons */}
        <Col
          lg="4"
          className="col-11 mx-auto p-3 p-lg-5 border rounded bg-light text-danger"
        >
          <Form.Group controlId="speechVoice">
            <Form.Label className="font-weight-bold">Language/Voice</Form.Label>
            <Form.Control as="select">
              {voices &&
                voices.map((voice, idx) => (
                  <option key={idx} value={voice.name}>
                    {voice.name} - {voice.lang}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="speechVol">
            <Form.Label className="font-weight-bold">Volume</Form.Label>
            <Form.Control
              type="range"
              step="0.05"
              min="0.1"
              max="1"
              value={volume}
              onChange={e => setVolume(e.target.valueAsNumber)}
            />
          </Form.Group>
          <Form.Group controlId="speechRate">
            <Form.Label className="font-weight-bold">Rate</Form.Label>
            <Form.Control
              type="range"
              step="0.1"
              max="10"
              value={rate}
              onChange={e => setRate(e.target.valueAsNumber)}
            />
          </Form.Group>
          <Form.Group controlId="speechPitch">
            <Form.Label className="font-weight-bold">Pitch</Form.Label>
            <Form.Control
              type="range"
              step="0.1"
              max="2"
              value={pitch}
              onChange={e => setPitch(e.target.valueAsNumber)}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}
