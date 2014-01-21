/**
 * AreaController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

create: function(req, res, next) {      
    var AreaObj = {
        Name: "関東",
        Areas:[{id:"1",name:"東京"},{id:"2",name:"神奈川"},{id:"3",name:"千葉"},{id:"4",name:"埼玉"},{id:"5",name:"茨城"},{id:"6",name:"栃木"},{id:"7",name:"群馬"}]
    }
    var Area1Obj = {
        Name: "関西",
        Areas:[{id:"8",name:"大阪"},{id:"9",name:"京都"},{id:"10",name:"兵庫"},{id:"11",name:"滋賀"},{id:"12",name:"奈良"},{id:"13",name:"和歌山"}]
    }
    var Area2Obj = {
        Name: "東海",
        Areas:[{id:"14",name:"愛知"},{id:"15",name:"静岡"},{id:"16",name:"岐阜"},{id:"17",name:"三重"}]
    }
    var Area3Obj = {
        Name: "北海道・東北",
        Areas:[{id:"18",name:"北海道"},{id:"19",name:"青森"},{id:"20",name:"秋田"},{id:"21",name:"岩手"},{id:"22",name:"宮城"},{id:"23",name:"福島"},{id:"24",name:"山形"}]
    }
    var Area4Obj = {
        Name: "九州・沖縄",
        Areas:[{id:"25",name:"福岡"},{id:"26",name:"熊本"},{id:"27",name:"鹿児島"},{id:"28",name:"大分"},{id:"29",name:"長崎"},{id:"30",name:"宮崎"},{id:"31",name:"佐賀"},{id:"32",name:"沖縄"}]
    }
    var Area5Obj = {
        Name: "中国",
        Areas:[{id:"33",name:"広島"},{id:"34",name:"岡山"},{id:"35",name:"山口"},{id:"36",name:"島根"},{id:"37",name:"鳥取"}]
    }
    var Area6Obj = {
        Name: "甲信越・北陸",
        Areas:[{id:"42",name:"新潟"},{id:"43",name:"山梨"},{id:"44",name:"長野"},{id:"45",name:"富山"},{id:"46",name:"石川"},{id:"47",name:"福井"}]
    }
    var Area7Obj = {
        Name: "四国",
        Areas:[{id:"38",name:"香川"},{id:"39",name:"愛媛"},{id:"40",name:"高知"},{id:"41",name:"徳島"}]
    }
    Area.destroy(function (err) {
    });
        
    Area.create(AreaObj, function AreaCreated(err, Area) {
    });
    Area.create(Area1Obj, function AreaCreated(err, Area) {
    });
    Area.create(Area2Obj, function AreaCreated(err, Area) {
    });
    Area.create(Area3Obj, function AreaCreated(err, Area) {
    });
    Area.create(Area4Obj, function AreaCreated(err, Area) {
    });
    Area.create(Area5Obj, function AreaCreated(err, Area) {
    });
    Area.create(Area6Obj, function AreaCreated(err, Area) {
    });
    Area.create(Area7Obj, function AreaCreated(err, Area) {
    });
    res.redirect('/area/');
  },
  
};