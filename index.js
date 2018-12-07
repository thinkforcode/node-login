(function(){
    const express = require("express");
    const mongoose = require("mongoose");
    const ejs = require("ejs");
    const bodyParser = require("body-parser");

    const port = process.env.PORT || 8000;
    const app = express();

   // setting middleware here
    app.set('view engine','ejs');
    app.use(express.static('./public'));
    // listening server here on the port 8000

    app.listen(port,(req,res)=>{
        console.log("server running on the port:" + port);
    })

})();