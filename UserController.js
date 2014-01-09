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
    var async = require('async');
    var tasks = [];
    tasks.push(function(next) { User.find(next);}); 
    tasks.push(function(next) { JobType.find(next);}); 
    //tasks.push(function(next) { JobType.findOne(next);}); 

    async.series(tasks, function(err, results) {
      if(err) {
        // ÉGÉâÅ[èàóù
        return;
      }
    res.view({
        users: results[0],
        jobTypes: results[1]
    })
      console.log('success');
    });
    
}

};
