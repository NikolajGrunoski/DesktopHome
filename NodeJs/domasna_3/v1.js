// var pero = (cb) =>{
//     var sum = 0;
//     for(var i = 0; i < 100;i++){
//         sum += i; // sum = sum + i
//     }
//     cb(sum);     // cb ustvari prenasocuva kon funkcija vo slujanov sum
// }

// var log = (num) =>{
//     console.log(num);
// }

// pero(log);


var http = require('http');
var server = http.createServer(function (req, res) {
    var URL = req.url.split('/');

    for(i=0; i<9999; i++)
    if(i % 2 != 0){
        if(n[i] == "+"){
            c=n[i-1] + [n+1]
        }else if(n[i] == "-"){
            c=n[i-1] - [n+1]
        }else if(n[i] == "*"){
            c=n[i-1] * [n+1]
        }else if(n[i] == "/"){
            c=n[i-1] / [n+1]
        }
        console.log (c);
        break;
    }



    server.listen(8080, (err) => {
        if(err){
            console.log(err);
            return;
    })
        console.log('Server has started successfully!');
})