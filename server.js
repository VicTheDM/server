var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');
const dbURI = 'mongodb+srv://SaryChan4Ev4:L4L30M45H3rM054@mensajeria.psslkdx.mongodb.net/?retryWrites=true&w=majority'
const router=express.Router();

const conectarDB = async () => {
    try {
        await mongoose.connect( dbURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        });
        console.log('DB Atlas Conectado')
    } catch (error) {
        console.log(error);
        process.exit(1);  // Detiene la app
    }    
}
conectarDB();
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000,function check(error){
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});