const express = require('express');
const { API } = require("../../util/constant");
const { getAllTeamMemberDataController } = require('../../controllers/Team_members/Team_memberController');


const teamMemberRouter = express.Router()

// get all team member
teamMemberRouter.get(
    API.API_CONTEXT + "teamMember/get",
    getAllTeamMemberDataController
)


module.exports =teamMemberRouter