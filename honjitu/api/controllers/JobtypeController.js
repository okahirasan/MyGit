/**
 * JobtypeController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

create: function(req, res, next) {      
    Jobtype.destroy(function (err) {
    });  
    var jobtypes = ["ホール・サービススタッフ","調理・キッチンスタッフ","店長・マネージャー（候補）","料理長・シェフ（候補）","製菓、パティシエ","製パン、ブーランジェ","ソムリエ、バーテンダー、バリスタ","SV・エリアマネージャー（候補）","営業管理職、経営幹部","本部職（人事、業態・メニュー開発等）","ウェディングプランナー","販売スタッフ","女将・和装ホール","栄養士・管理栄養士","スーパーフロア・小売","生産加工（精肉・鮮魚・青果など）","その他職種"];
    var cnt = 1;
    jobtypes.forEach(function(jobtype){
        var jobtypeObj = {
        name: jobtype,
        sort: cnt
        }
        Jobtype.create(jobtypeObj, function JobtypeCreated(err, Jobtype) {
        });
        cnt++;
    });
    res.redirect('/Jobtype/');
  },
  
};
