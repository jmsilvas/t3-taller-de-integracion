import React, {useState} from 'react';
import {InputGroupAddon, Row, Button, Input, InputGroup} from 'reactstrap';
import {socket} from '../services/socket'


export default function Chat(props) {
    const [nickname, setNickname] = useState("")
    const [currentText, setCurrentText] = useState("")
    const [chatText, setChatText] = useState("")

    socket.on("CHAT", (payload) => {
        if (payload.name===nickname) {
            setChatText(chatText+"yo"+"separeichon"+Date(payload.date).split("GMT")[0]+"separeichon"+payload.message+"qwertyui")
            
            
        }
        else{
            setChatText(chatText+payload.name+"separeichon"+Date(payload.date).split("GMT")[0]+"separeichon"+payload.message+"qwertyui")
        }
      });
    

    function sendMessage() {
        socket.emit("CHAT", {name:nickname, message: currentText});
        setCurrentText("")
    }
    return (
        <>
        {nickname&&<Row className="chat-scroll">
            <div>
              {chatText.split("qwertyui").map((msg) => (
                  <>
                  <div>{msg.split("separeichon")[0]} {msg.split("separeichon")[1]}</div>
                  <p>{msg.split("separeichon")[2]}</p>
                  </>

              ))}
              </div> 
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
