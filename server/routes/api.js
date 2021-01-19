const { Router } = require('express');
const Task = require('../models/Task');

const router = Router();

router.get('/', async (req, res) => {
  try {
    if (req.session?.user) {
      const taskArray = await Task.find({ author: req.session.user.id }).sort({ _id: -1 });
      return res.json(taskArray);
    }
  } catch (error) {
    return res.sendStatus(204);
  }
  res.sendStatus(204);
});

router.post('/', async (req, res) => {
  const newTask = new Task({
    description: req.body.task,
    status: false,
    author: req.session.user.id,
  });
  const result = await newTask.save();
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(400);
  }
});

router.delete('/', async (req, res) => {
  const { _id } = req.body;
  try {
    await Task.findByIdAndDelete(_id);
    return res.sendStatus(200);
  } catch (error) {
    res.sendStatus(406);
  }
});

router.patch('/', async (req, res) => {
  const { _id } = req.body;
  if (_id) {
    const result = await Task.findById(_id);
    if (result) {
      result.status = !result.status;
      await result.save();
      return res.send(result);
    }
  }
  res.sendStatus(400);
});

module.exports = router;
