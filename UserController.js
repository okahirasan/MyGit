/**
 * UserController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {
  show: function(req, res, next) {

    // Get an array of all users in the User collection(e.g. table)
    JobType.find(function tttt(err, users) {
      if (err) return next(err);
      res.view({
        users: users,
        corndogs: [{name: 'Hank the Corndog'}, {name: 'Lenny the Corndog'}]
      });
    });
  },
  index: function(req, res, next) {
    var fs = require('fs');
    var async = require('async');
    var test;
    var tasks = [];
    //var hoge = "a";
    //tasks.push(function(next) { fs.mkdir('./hoge', next); }); 
    //tasks.push(function(next) { fs.mkdir('./hoge/piyo', next); }); 
    tasks.push(function(next) { test:JobType.find(test,next);}); 
    tasks.push(function(next) { User.find(next);}); 

    async.series(tasks, function(err, results) {
          console.log(results[0]);
          //console.log(test);
          //console.log(users);

      if(err) {
        // ÉGÉâÅ[èàóù
        return;
      }

      console.log('success');
    });

  res.json("abc");
}

};
