/**
 * JobController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */
var jobRepo = require('../repository/jobRepository');

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
    'new': function(req, res) {
      res.view(
      {layout: "jobLayout"}
        );
    },

    index: function(req, res, next) {
      var searchObj = {
        title: req.param('title'),
      }
      console.log(searchObj.title);
        var async = require('async');
        var tasks = [];
        //tasks.push(function(next) { Job.find({ title: 'test',conditions : '' },next);});
        tasks.push(function(next) { Job.find(next);});
        tasks.push(function(next) { Area.find(next);});
        //tasks.push(function(next) { Job.find(next).where({ title: 'test'})}); 
        async.series(tasks, function(err, results) {
          if(err) {
            return;
          }
          var cnt = 0;
          console.log(results[1]);
          results[0].forEach(function(i){
            results[0][cnt]['commentNum'] = i.comment.length;
            if(i.comment[0] == "")
            {
              results[0][cnt]['commentNum'] = i.comment.length -1;
            }
            cnt++;
          })
          res.view({
            layout: "jobLayout",
            jobs: results[0],
            zone:results[1]
          })           
        });
    },
    show: function(req, res, next) {
        Job.findOne(req.param('id'), function foundJob(err, job) {
        if (err) return next(err);
        if (!job) return next();
        res.view({
            job: job
          });
        });
    },
  // render the edit view (e.g. /views/edit.ejs)
  edit: function(req, res, next) {

    // Find the user from the id passed in via params
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next('User doesn\'t exist.');

      res.view({
        user: user
      });
    });
  },

  create: function(req, res, next) {
    //var async = require('async');
    //    var tasks = [];
    //    tasks.push(function(next) { Company.find(next);}); 
    //    async.series(tasks, function(err, results) {
    //      if(err) {
    //        return;
    //      }
    //      var cnt = 0;
    //      console.log("companyEE",results[0][0]);
        
    var jobObj = {
        title: req.param('title'),
        contents: req.param('contents'),
        conditions: req.param('conditions'),
        zip: req.param('zip'),
        adress1: req.param('adress1'),
        adress2: req.param('adress2'),
        adress3: req.param('adress3'),
        startDt: req.param('startDt'),
        endDt: req.param('endDt'),
        tags: [req.param('tags'),"test"],
        comment: [req.param('comment')],
        company:{id:1,name:"test"},
        jobType:[{name:req.param('jobType'),salary:req.param('jobTypeSalary')},{name:req.param('jobType'),salary:req.param('jobTypeSalary')}]
    }
    console.log("jobObj", jobObj);
        Job.create(jobObj, function jobCreated(err, job) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }

        return res.redirect('/job/new');
      }

        res.redirect('/job/');
    });
    
    //});
  },

};
