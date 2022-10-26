const db = require('../config/connection');
const { User, Post } = require('../models');
const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeed.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Post.deleteMany({});
    await Post.create(postSeeds)
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
