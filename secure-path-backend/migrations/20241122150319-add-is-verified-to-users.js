module.exports = {
  async up(db, client) {
    await db.collection('users').updateMany({}, {$set: {isVerified: false}});
  },

  async down(db, client) {
    await db.collection('users').updateMany({}, {$unset: {isVerified: ''}})
  }
};
