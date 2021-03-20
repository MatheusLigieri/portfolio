const app = require('./config/express')();
const port = app.get('port');

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

app.get('/', function (req, res) {
  res.render(__dirname + "/web/pages/index.ejs");
});
