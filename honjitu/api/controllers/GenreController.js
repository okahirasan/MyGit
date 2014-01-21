/**
 * GenreController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

create: function(req, res, next) {      
    Genre.destroy(function (err) {
    });  
    var genres = ["フレンチ","イタリアン","洋食全般","創作・ダイニング","居酒屋","バール・バー","和食全般","寿司","日本料理・割烹・懐石","焼鳥","焼肉","うどん・そば・ラーメン","中華料理","韓国料理","アジア・エスニック","ファストフード・ファミレス","カフェ","串カツ・串揚げ","お好み焼き・たこ焼き","ステーキ・鉄板焼","グランメゾン・リストランテ","ホテル・旅館","ウェディング・ゲストハウス","パティスリー・製菓","ブーランジェリー・製パン","中食（惣菜・宅配など）","食品・小売・流通","給食・社員食堂・介護・病院","その他"];
    var cnt = 1;
    genres.forEach(function(genre){
        var genreObj = {
        name: genre,
        sort: cnt
        }
        Genre.create(genreObj, function GenreCreated(err, Genre) {
        });
        cnt++;
    });
    //Genre.create(genre, function GenreCreated(err, Genre) {
    //});
    res.redirect('/genre/');
  },
  
};