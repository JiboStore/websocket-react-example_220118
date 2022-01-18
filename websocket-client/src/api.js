import openSocket from 'socket.io-client';

const url = process.env.REACT_APP_PUBLIC_URL;
console.log(url);
// const socket = openSocket('http://localhost:8000');
const socket = openSocket(url);

function subscribeToTimer(callback) {
  socket.on('timer', timestamp => callback(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}


function sendForm(jsonObject) {
    socket.emit('client-event', JSON.stringify(jsonObject));
}

export { subscribeToTimer };
export { sendForm };
