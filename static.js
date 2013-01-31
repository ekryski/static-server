var express = require("express"),
    app     = express(),
    port    = parseInt(process.env.PORT, 10) || 8000;

app.get("/", function(req, res) {
  res.redirect("/index.html");
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  app.use(express.logger({format: 'dev'}));
  app.use(app.router);
});

app.listen(port);

console.log('Static server listening on 127.0.0.1:' + port);