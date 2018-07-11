const express = require('express');
const router = express.Router();

// @route GET api/profile/test
// #desc Tests users route
// accsee public
router.get('/test', (req, res) => res.send(`hello there users`));

module.exports = router;

