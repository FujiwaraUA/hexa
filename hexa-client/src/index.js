import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Hexa from './apps/Hexa';
import Menu from './apps/Menu';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import {Helmet} from "react-helmet";

const socket = io.connect('192.168.0.5:3000');
socket.emit('chat message', "Hi");

const DOMNode = document.getElementById('root');

ReactDOM.render(
  <div className="ga-root">
  <Helmet>
    <title>GA - Hexa</title>
    <meta name="description" content="HEXA APLICATION" />
  </Helmet>
    <Menu />
  <SocketProvider socket={socket}>
    <Hexa />
  </SocketProvider>
  </div>,
  DOMNode);
