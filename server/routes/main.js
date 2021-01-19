/* eslint-disable no-underscore-dangle */
const {
  Router,
} = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = Router();

router.get('/isAuth', (req, res) => {
  if (req.session?.user) {
    return res.sendStatus(200);
  }
  res.sendStatus(403);
});

router.post('/login', async (req, res) => {
  const {
    email,
    password,
  } = req.body;
  if (email && password) {
    try {
      const currentUser = await User.findOne({
        email,
      });
      if (currentUser) {
        if (await bcrypt.compare(password, currentUser.password)) {
          console.log('Success login');
          req.session.user = {
            id: currentUser._id,
          };
          return res.sendStatus(200);
        }
      }
      return res.sendStatus(406);
    } catch (error) {
      return res.sendStatus(401);
    }
  }
});

router.post('/registration', async (req, res) => {
  const {
    name,
    email,
    password,
  } = req.body;
  if (name && email && password) {
    try {
      const hashPass = await bcrypt.hash(password, 10);
      const user = new User({
        email,
        password: hashPass,
        name,
      });

      await user.save();
      req.session.user = {
        id: user._id,
      };
      return res.sendStatus(200);
    } catch (error) {
      res.sendStatus(400);
    }
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return res.status(400);
    }
    res.clearCookie('sid');
    return res.sendStatus(200);
  });
});

module.exports = router;
