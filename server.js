const c = console.log;
app = require("./app");
db = require('./models/db')

app.listen(app.get("port"), () => {
  c(`Starting API RESTful in port: ${app.get("port")}`);
});

