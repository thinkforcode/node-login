(function(){
    const express = require("express");
    const mongoose = require("mongoose");
    const ejs = require("ejs");


    const port = process.env.PORT || 8000;
    const app = express();

    // listening server here on the port 8000

    app.listen(port,(req,res)=>{
        console.log("server running on the port:" + port);
    })

})();