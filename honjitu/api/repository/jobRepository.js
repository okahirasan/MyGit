function setCommentNum (job) {
    var cnt = 0;
    job[0].forEach(function(i){
      job[0][cnt]['commentNum'] = i.comment.length;
      if(i.comment[0] == "")
      {
        job[0][cnt]['commentNum'] = i.comment.length -1;
      }
      cnt++;
    })
}

module.exports = {
  setCommentNum: setCommentNum
}