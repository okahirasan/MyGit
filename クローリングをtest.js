var request = require("request");
var cheerio = require("cheerio");
//J0009160
var error = "求人情報エラー | 飲食の求人・転職・就職なら「ジョブ・レストラン」";
//J0011172
var requestUrl = "http://www.jobs-restaurant.net/J0009160";
request({url: requestUrl}, function(error, response, body) {
 if (!error && response.statusCode == 200) {
        $ = cheerio.load(body); 
        var url = response.request.href;
        var title = $(".apply-title01").text();
        var title2 = $(".apply-title03").text();
        var mise = $(".detail-t01").text();
        var company = $(".detail-t02").text();
        console.log("title",title);
        console.log("mise",mise);
        console.log("company",company);

 
    }
});