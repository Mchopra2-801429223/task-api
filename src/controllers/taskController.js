import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    const completed = req.query.completed;

    const tasks = await taskService.getAllTasks(
      completed === undefined ? undefined : completed === 'true'
    );

    res.json(tasks);
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}