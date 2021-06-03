let data = 'u, d, l, r'

let connection;

const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;

};

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
    };
  };
  

  
  
  


module.exports = { setUpInput }