var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var models = require('../models/index');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
var sockets = [];
var config = models.config;
var port = config.launchPort;

console.log(config);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  sockets.push(socket);
  console.log('a user connected, total length: ', sockets.length);

  socket.on('disconnect', function(){
    sockets = sockets.filter(sk => sk != socket);
    console.log('user disconnected, left length: ', sockets.length);
  });

  socket.on('message', function(msg){
    // console.log('message: ' + msg, typeof msg);
    var json = {};
    try {
      json = JSON.parse(msg);
    } catch(e) {
      json.error = 'json parse error.';
    }
    // console.log('json', json);
    
    if (json.model) {

      const Model = models[json.model];
      if (Model) {

        
        const where = parseWhere(json.where);
        const data = parseData(json.data);

        switch (json.type) {
          case 'query':
            const order = parseSort(json.sort);
            const include = parseJoins(json.joins);

            Model.findAll({
              where,
              include,
              order,
            }).then(m => {
              // console.log(JSON.stringify(m));
              json.payload = m;
              socket.send(json);
            }).catch(err => {
              console.error(err);
              json.error = err;
              socket.send(json);
            });
          break;
          case 'insert':
            Model.create(data)
            .then(m => {
              json.payload = m;
              socket.send(json);
            })
            .catch(err => {
              console.error(err);
              json.error = err;
              socket.send(json);
            });
          break;
          case 'update':
            Model.update(data, {where})
            .then(m => {
              json.payload = {'updated': m};
              socket.send(json);
            })
            .catch(err => {
              console.error(err);
              json.error = err;
              socket.send(json);
            });
          break;
          case 'delete':
            Model.destroy({where})
            .then(m => {
              json.payload = {'deleted': m};
              socket.send(json);
            })
            .catch(err => {
              console.error(err);
              json.error = err;
              socket.send(json);
            })
          break;
          default:
            json.error = 'type not work.';
            socket.send(json);
        }

      } else {
        json.error = 'model not found.'
        return socket.send(json);
      }
      
    } else {
      socket.send(json);
    }
  });

});



http.listen(port, function(){
  console.log(`mms socket started listening on *:${port}`);
});



function parseWhere(input) {
  var next = {};
  if (input) {
    Object.keys(input).map(key => {
      var loc = input[key];
      if (key.indexOf('|') >= 0) {
  
        var sp = key.split('|');
        var _key = sp[0].trim();
        switch (sp[1]) {
          case 'between':
            next[_key] = {
              [Op.between]: loc.map(e => innerValue(e)),
            }
          break;
          default:
            next[_key] = {
              [Op.in]: Array.isArray(loc) ? loc : [loc],
            }
        }
        
      } else {
        next[key] = {
          [Op.in]: Array.isArray(loc) ? loc : [loc],
        }
      }
    });
  }
  // console.log('next where object', next);
  return next;

  function innerValue(ele) {
    if (ele.match(/\d{4}[\-\/]\d{2}[\-\/]\d{1,2}/)) {
      var datetime = ele.replace(/\-/g, '/');
      var date = new Date(datetime);
      return isNaN(date.getTime()) ? ele : date.addHours(8).toISOString();
    }
    return ele;
  }
}

function parseJoins(input) {
  var ary = [];
  
  if (Array.isArray(input)) {
    input.map(e => {
      models[e] && ary.push(models[e]);
    });
  } else if (input) {
    models[input] && ary.push(models[input]);
  }
  // console.log('next joins object', ary);
  return ary;
}

function parseSort(input) {
  var ary = [];
  if (Array.isArray(input)) {
    input.map(e => {
      innerSort(e);
    });
  } else {
    innerSort(input);
  }
  // console.log('next sort object', ary);
  return ary;

  function innerSort(ele) {
    if (!ele) return;
    if (ele.indexOf('|') > 0) {
      var loc = ele.split('|');
      var sort = loc[1].match(/desc/i) ? 'DESC' : 'ASC';
      ary.push([loc[0].trim(), sort]);
    } else {
      ary.push([ele, 'ASC']);
    }
  }
}

function parseData(input) {
  // var obj = {};
  if (input) {
    // Object.keys(input).map(key => {
    //   obj[key] = input[key];
    // });
  } else {
    return {};
  }
  return input
}

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}
