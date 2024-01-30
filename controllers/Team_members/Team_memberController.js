const { allTeamMember } = require("../../services/Team_member/Team_member.service");
const { MESSAGE } = require("../../util/constant");


const getAllTeamMemberDataController = async (req, res) => {
    try {
    const teamMembers = await allTeamMember(req.pool)
    return res.status(MESSAGE.SUCCESS_GET.STATUS_CODE).send(teamMembers);
    }
    catch (error) {
        return res.status(MESSAGE.SERVER_ERROR.STATUS_CODE).json({
            message: "Users not found",
            status: MESSAGE.SERVER_ERROR.STATUS_CODE,
        })
    
    }
}

module.exports = {
    getAllTeamMemberDataController
}