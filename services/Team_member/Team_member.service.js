const { getData } = require("../../util/dao")

const allTeamMember = async(pool) => {
    const query = `SELECT * FROM team_member`
    const allTeamMember = await getData(pool, query)
    return allTeamMember
}


module.exports = {
    allTeamMember,
}