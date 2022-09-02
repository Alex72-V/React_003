import React, {useEffect, useState, useRef} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, } from '@mui/material/colors';
import { Typography } from '@mui/material';
import Chats from "./Chats";
import Message from "./Message";

const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
  },
});


function App() {
  const [message, setMessage] = useState('');
  const [messageList, setmessageList] = ([]);
  const [author, setAuthor] = useState('');
  const [chatList] = useState([
    { name: 'ЧАТ 001', id: '1' },
    { name: 'ЧАТ 002', id: '2' },
    { name: 'ЧАТ 003', id: '3' },
  ]);
  const inputRef = useRef(null);

  const buttonClick = () => {
    let newId = 1;
    if (messageList > 0) newId = messageList[messageList.length - 1].id + 1;
    if (author.length > 0) {
      setmessageList(messageList => [...messageList, { text: message, author: author, id: newId
      }]);
    } else {
      alert("Добавьте имя")
    }
  }; 


  useEffect( () => {
  if (messageList.length > 0) {
    setTimeout( () => {
      alert("Ваше сообщение отправлено!");
    }, 1500);
  };
  focusTextField(inputRef.current);
},[messageList, author]);

  function focusTextField(input) {
    if (input) {
      input.focus();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App main">
        <div className="message-text">
          <Typography variant="h4" component="div" color="primary">ЧАТ</Typography>
          <List sx={{ margin: '10px 0 10px 0', width: '100%', bgcolor: 'background.paper'}}>
            {chatList.map((item) => <Chats name={item.name} key={item.id} />)}
          </List>
        </div>
      
      <div className="messageList">
        <Box
        component="form"
        sx={{ m: 1, borderRadius: '10px', gap: '10px', width: '400px', margin: '10px', padding: '15px', backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],}}
        noValidate
        autoComplete="off"
        >
          <Typography variant="h4" component="div" color="primary">Сообщения</Typography>
          <TextField sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff'}}
          id="outlined-multiline-flexible" fullWidth
          label="Author name"
          multiline
          maxRows={4}
          value={author}
          inputRef={inputRef}
          onChange={(e) => setAuthor(e.target.value)}
          />
          <TextField sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff'}}
          id="outlined-multiline-flexible" fullWidth
          label="Message text"
          multiline
          maxRows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          />
          <Button sx={{ margin: '10px 0 10px 0'}} variant="outlined" size="large" fullWidth onClick={buttonClick}>Отправить сообщение</Button>
        </Box>
        { message.map(item => {
          return (
            <Message author={item.author} text={item.text} key={item.id} />
          )
        })
        }
      </div>
      </div>
    </ThemeProvider>
  )
}


export default App;
