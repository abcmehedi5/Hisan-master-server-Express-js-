const Joi = require("joi");
const { allTeamMember, postTeamMember } = require("../../services/Team_member/Team_member.service");
const { MESSAGE } = require("../../util/constant");

const schema = Joi.object({
    name:Joi.string().min(5).max(200).required(),
    title:Joi.string().min(5).max(500).required(),
    image: Joi.string().min(5).max(500).required(),
    bio:Joi.string().min(10).required()
})

// get all team member
const getAllTeamMemberDataController = async (req, res) => {
    try {
    const teamMembers = await allTeamMember(req.pool)
    return res.status(MESSAGE.SUCCESS_GET.STATUS_CODE).send(teamMembers);
    }
    catch (error) {
        return res.status(MESSAGE.SERVER_ERROR.STATUS_CODE).json({
            message: "Team Member not found",
            status: MESSAGE.SERVER_ERROR.STATUS_CODE,
        })
    
    }
}

// post team member

const postTeamMemberController = async (req, res) => {
    try {
        const payload = req.body 
        const result = await postTeamMember(req.pool, payload) 
        if (result) {
         return res.status(MESSAGE.SUCCESS_CREATED.STATUS_CODE).send(result);
        }
    }
    catch (error) {
        return res.status(MESSAGE.SERVER_ERROR.STATUS_CODE).json({
        message: "Team Member not found",
        status: MESSAGE.SERVER_ERROR.STATUS_CODE,
        })
    }
}

module.exports = {
    getAllTeamMemberDataController,
    postTeamMemberController,
    schema
}