const express = require('express');
const router = express.Router();

// @route GET api/profile/test
// #desc Tests profile route
// accsee public
router.get('/test', (req, res) => res.json({msg: "i love you"}));

module.exports = router;