'use strict';
const { BLOG_TABLE, BlogSchema } = require('../models/Blog.js')

module.exports = {
  async up (queryInterface, ) {
    await queryInterface.createTable(BLOG_TABLE, BlogSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(BLOG_TABLE);
  }
};
