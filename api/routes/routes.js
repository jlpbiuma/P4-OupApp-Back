const activityRoutes = require('./activity.routes.js')
const authRoutes = require('./auth.routes.js');
const contactRoutes = require('./contact.routes.js');
const photoRoutes = require('./photo.routes.js');
const reminderRoutes = require('./reminder.routes.js')
const userRoutes = require('./user.routes.js');

const express = require('express')
const api = express()

const {checkAuth} = require('../utils/utils.js')

// baseURL/api/activity
api.use('/activity',checkAuth, activityRoutes)
// baseURL/api/auth
api.use('/auth', authRoutes);
// baseURL/api/contact
api.use('/contact',checkAuth, contactRoutes);
// baseURL/api/photo
api.use('/photo',checkAuth, photoRoutes);
// baseURL/api/reminder
api.use('/reminder',checkAuth, reminderRoutes);
// baseURL/api/user
api.use('/user',checkAuth, userRoutes);

module.exports = api;