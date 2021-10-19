const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/'));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/cumple.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/cumple.css'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/cumple.js'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');