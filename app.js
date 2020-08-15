/* import dependencies */
let app = require('./config/server');

/* listen port 8000 */
const PORT = 8000;
app.listen(PORT, function(){
    console.log(`server listening to the port ${PORT}`);
});
