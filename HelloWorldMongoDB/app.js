'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', function( err, db ){

  if(err) throw err;

  db.collection('courses').findOne({}, function( err, doc ){

    console.dir( doc );
    db.close();
  });
});