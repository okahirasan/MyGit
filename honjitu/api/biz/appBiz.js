function getDataName (results,id){
    var data = JSON.stringify(results);
    var name = "";
    var parser = function(k,v){return v.toString().indexOf('function') === 0 ? eval('('+v+')') : v};
    var json2 = JSON.parse(data, parser);
    json2.forEach(function(i){
      if (i.id == id) {
        name = i.name;
      }
    })
    return name;
}

module.exports = {
  getDataName: getDataName
}