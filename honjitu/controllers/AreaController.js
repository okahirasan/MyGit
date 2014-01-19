/**
 * AreaController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

create: function(req, res, next) {      
    var AreaObj = {
        Name: "kantou",
        Areas:[{id:"1",name:"Tokyo"},{id:"2",name:"kanagawa"}]
    }
    console.log("AreaObj", AreaObj);
        Area.create(AreaObj, function AreaCreated(err, Area) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
      }

        res.redirect('/job/');
    });
    
    //});
  },
  
};
