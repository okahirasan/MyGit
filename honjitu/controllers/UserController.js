module.exports = {

  attributes: {
    _id:         'integer', 
    name:     'string',
    // �C���X�^���X���\�b�h
    getNickname: function() {
        return this.name || '������';
    },
  },
  // static���\�b�h
  findNewUsers: function(cb) {
    this.find({
          limit: 20,
          sort: '_id desc'
    }, cb);
  }

};