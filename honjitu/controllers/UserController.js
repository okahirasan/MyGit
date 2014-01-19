module.exports = {

  attributes: {
    _id:         'integer', 
    name:     'string',
    // インスタンスメソッド
    getNickname: function() {
        return this.name || '名無し';
    },
  },
  // staticメソッド
  findNewUsers: function(cb) {
    this.find({
          limit: 20,
          sort: '_id desc'
    }, cb);
  }

};