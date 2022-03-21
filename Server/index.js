const express = require('express');
const app = express();
  
app.get('/' , (req,res)=>{
   // 200 status code means OK
   res.status().send(200, "Reponse from server"); 
})
  
// Server setup
app.listen(3000 , ()=>{
    console.log("server running");
});