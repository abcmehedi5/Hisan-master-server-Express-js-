const express = require('express');
const { API } = require('../../util/constant');
const { getAllProjectsController, schema:projectsSchema, postProjectController } = require('../../controllers/Project/projectController');
const Validator = require('../../middlewares/validator_middleware');
const projectRoute = express.Router()

// get projects
projectRoute.get(
    API.API_CONTEXT + "project/get",
    getAllProjectsController
);

// post projects
projectRoute.post(
    API.API_CONTEXT + "project/post",
    Validator(projectsSchema),
    postProjectController
)

module.exports = projectRoute