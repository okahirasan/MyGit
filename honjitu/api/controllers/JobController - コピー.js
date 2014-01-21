/**
 * JobController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */
var jobRepo = require('../repository/jobRepository');
var areaBiz = require('../biz/areaBiz');
var appBiz = require('../biz/appBiz');

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
        var async = require('async');
        var tasks = [];
        var areaId = req.param('areaId');
        var selectArea = req.param('areaId');
        
  
    
        var genreId = req.param('genreId');
        var testObj = {
          'areaId': areaId
        };
        if (areaId == undefined) {
          testObj['areaId'] = {$ne: undefined};
        }
        if (genreId == undefined) {
          genreId = "000000";
        }
        if (selectArea == undefined) {
          selectArea = "000000";
        }
        var jsonArea = JSON.stringify(selectArea);

        tasks.push(function(next) { Job.find(testObj,next);});
        tasks.push(function(next) { Area.find(next);});
        tasks.push(function(next) { Genre.find(next);});
        tasks.push(function(next) { Jobtype.find(next);});
        async.series(tasks, function(err, results) {
          console.log(results[1]);
          if(err) {
            return;
          }
          var cnt = 0;
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
            zone:results[1],
            genre:results[2],
            jobTypes:results[3],
            selectGenre:genreId,
            selectArea:jsonArea
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
    var async = require('async');
    var tasks = [];
    var areaId = req.param('area');
    var genreId = req.param('genre');
    tasks.push(function(next) { Area.find({'Areas.id':areaId},next);}); 
    tasks.push(function(next) { Genre.find({'id':genreId},next);}); 
    async.series(tasks, function(err, results) {
      console.log(results[0]);
    var areaName = areaBiz.getAreaName(results[0],areaId);
    var genreName = appBiz.getDataName(results[1],genreId);
    console.log("genre",genreName);
    console.log("result1",results[1]);
    var jobObj = {
          title: req.param('title'),
          contents: req.param('contents'),
          conditions: req.param('conditions'),
          zip: req.param('zip'),
          adress1: areaName,
          adress2: req.param('adress2'),
          adress3: req.param('adress3'),
          startDt: req.param('startDt'),
          endDt: req.param('endDt'),
          tags: [req.param('tags'),"test"],
          comment: [req.param('comment')],
          company:{id:1,name:"test"},
          genreId:req.param('genre'),
          genreName:genreName,
          areaId:req.param('area'),
          jobType:[{name:req.param('jobType'),salary:req.param('jobTypeSalary')},{name:req.param('jobType'),salary:req.param('jobTypeSalary')}]
      }
       Job.create(jobObj, function jobCreated(err, job) {
        res.redirect('/job/');
      });
       
    })

  },

};
