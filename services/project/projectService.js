 
const { getData } = require("../../util/dao")

const getProjectsData = async (req) => {
    const query = `SELECT * FROM projects`
    const result = await getData(req.pool, query)
    return result
}

// const postProjectsData = async (req, payload) => {
//     const 
// }


module.exports = { getProjectsData }