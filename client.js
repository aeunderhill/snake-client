const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {

  const name = 'Name: AEU';
  const up = 'Move: up';
  const down = 'Move: down';
  const left = 'Move: left';
  const right = 'Move: right';
  
  
  const conn = net.createConnection({
    host: IP,
    port: Port
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    conn.write('Name: AEU');
    setInterval(() => { conn.write(`${up}`)}, 100);
    setInterval(() => { conn.write(`${down}`)}, 100);
    setInterval(() => { conn.write(`${left}`)}, 100);
    setInterval(() => { conn.write(`${right}`)}, 100);
    
  });
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect }