var request = require("request");
var cheerio = require("cheerio");
//J0009160
var error = "���l���G���[ | ���H�̋��l�E�]�E�E�A�E�Ȃ�u�W���u�E���X�g�����v";
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