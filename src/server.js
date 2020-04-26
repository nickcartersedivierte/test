const path = require ('path');
const express = require ('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {

    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(()=> console.log('Connected to the Database'))
    .catch(e => console.log(e));

const indexRoutes = require('./routes/index');

app.set('port' , process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set ('view engine' , 'ejs');

app.use(morgan ('dev'));
app.use(express.urlencoded({extended: false}));

app.use('/' , indexRoutes);

app.listen(app.get ('port'), ()=>{

console.log("MongoDB: " + process.env.MONGO_URL);
console.log(`Server on port${app.get('port')}`);

});



