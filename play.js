const connect = require('./client')
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect());



 /*let data = 'u, d, l, r'

let conn;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(data) {
    if (key === '\u0003') {
      process.exit(); 
    } else if (key === 'u') {
      conn.write('Move: up')
    } else if (key === 'd') {
      conn.write('Move: down') 
    } else if (key === 'l') {
      conn.write('Move: left')
    } else if (key === 'r') {
      conn.write('Move: right')
    }
  };

  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  
  return stdin
}


module.exports = { setUpInput } */





/*const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('incomingData', (data) => {
    console.log('This is your neighbourhood friendly server', data)
  })

  return conn;
};

console.log("Connecting ...");
connect()  */