const express = require('express');
const router = express.Router();

// @route GET api/posts/test
// #desc Tests posts route
// accsee public
router.get('/test', (req, res) => res.send(`hello there posts`));

module.exports = router;