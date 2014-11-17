var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
  console.log('server connected');
  c.on('end', function() {
    console.log('server disconnected');
  });
  c.on('data',function(data){
    	c.write("A");
	console.log(c.remoteAddress + ":" + c.remotePort + ">" + data);
        //process.stdout.write(data);
	//console.log(data.slice(0,8));
	//cardid = data.substring(0,3);
        //console.log(cardid);	
      	//broadcast(data);
  });
  c.write('hello\r\n');
  //c.pipe(c);
});
server.listen(1234, function() { //'listening' listener
  console.log('server bound on port 1234');
});
