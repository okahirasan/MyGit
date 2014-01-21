function getAreaStr (val) {
    if (val=="東京") {
        return "都";
    }else if (val=="大阪" || val=="京都") {
        return "府";
    }else if (val=="北海道") {
        return "";
    }else{
        return "県";
    }
}

function getAreaName (results,areaId){
    var areaData = JSON.stringify(results);
    var areaName = "test";
    var parser = function(k,v){return v.toString().indexOf('function') === 0 ? eval('('+v+')') : v};
    var json2 = JSON.parse(areaData, parser);
    console.log("getAreaName",json2);
    json2[0].Areas.forEach(function(i){
      if (i.id == areaId) {
        areaName = i.name + getAreaStr(i.name);
      }
    })
    return areaName;
}

module.exports = {
  //getAreaStr: getAreaStr,
  getAreaName: getAreaName
}