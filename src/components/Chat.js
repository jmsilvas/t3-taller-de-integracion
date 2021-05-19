import React, {useState, useEffect} from 'react';
import {InputGroupAddon, Row, Button, Input, InputGroup} from 'reactstrap';


export default function Chat() {
    const [nickname, setNickname] = useState("")
    const [currentText, setCurrentText] = useState("")
    

    function sendMessage() {
        console.log(currentText);
        setCurrentText("")
    }
    return (
        <>
        {nickname&&<Row className="chat-scroll">
            <p>aquí van los chats
            </p>
        </Row>}
        <Row>
        <InputGroup className="input-group23">
        <Input placeholder={nickname ? "Escribe tu mensaje" : "Ingresa tu nickname para chatear"}
        onChange={(event) => setCurrentText(event.target.value)} value={currentText}/>
        <InputGroupAddon addonType="append">
        {nickname ? 
            <Button color="secondary" onClick={sendMessage}>
                Send
            </Button>
                : 
            <Button color="secondary" onClick={()=>{setNickname(currentText);setCurrentText("")}}>
                Send
            </Button>}
          
        </InputGroupAddon>
      </InputGroup>
        </Row>
        </>
    )
}
