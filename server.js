var express = require('express')
var app = express()


function cleanDate(date) {
    var newDateCreator = new Date(date);
    var dd = newDateCreator.getDate();
    var mm = newDateCreator.getMonth()+1;
    var yyyy = newDateCreator.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }
    return yyyy+'-'+mm+'-'+dd
  }

app.get('/*', (req, res) => {
    
    var dateCheck
    
    if (Number.isInteger(Number(req.params[0]))) {
        dateCheck = new Date(Number(req.params[0])* 1000);
    } else {
        dateCheck = new Date(req.params[0]);
    }
    
    if (dateCheck !== null) {
        res.send({
            unix: Math.floor(dateCheck.getTime() / 1000),
            natural: cleanDate(dateCheck)
            });
    } else {
         res.send('not a valid  date');
    }

   
    
})
app.listen(8080)


