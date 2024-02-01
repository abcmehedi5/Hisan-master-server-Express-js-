const express = require('express');
const { API } = require("../../util/constant");
const { getAllTeamMemberDataController, schema:teamMemberSchema, postTeamMemberController } = require('../../controllers/Team_members/Team_memberController');
const Validator = require('../../middlewares/validator_middleware');


const teamMemberRouter = express.Router()

// get all team member
teamMemberRouter.get(
    API.API_CONTEXT + "teamMember/get",
    getAllTeamMemberDataController
)

// post team member 
teamMemberRouter.post(
    API.API_CONTEXT + "teamMember/post",
    Validator(teamMemberSchema),
    postTeamMemberController
)

module.exports =teamMemberRouter