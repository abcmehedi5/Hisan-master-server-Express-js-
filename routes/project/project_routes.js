const express = require('express');
const { API } = require('../../util/constant');
const { getAllProjectsController } = require('../../controllers/Project/projectController');
const projectRoute = express.Router()
projectRoute.get(
    API.API_CONTEXT + "project/get",
    getAllProjectsController
);

module.exports = projectRoute