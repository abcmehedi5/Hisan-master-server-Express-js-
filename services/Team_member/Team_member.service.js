const { getData, executeQuery } = require("../../util/dao")

// GET ALL MEMBER
const allTeamMember = async(pool) => {
    const query = `SELECT * FROM team_member`
    const allTeamMember = await getData(pool, query)
    return allTeamMember
}

// POST MEMBER
const postTeamMember = async (pool, payload) => {
    const { name, title, image, bio } = payload 
    const query = `INSERT INTO team_member (name, title,image,bio,date) VALUES (?, ?, ?, ?,NOW())`
    const values = [name,title,image,bio]
    const insert = await executeQuery(pool, query, values);
    if (insert) {
        return true;
    }
    return false;
}


module.exports = {
    allTeamMember,
    postTeamMember
}