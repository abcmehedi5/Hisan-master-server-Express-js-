 
const { getData, executeQuery } = require("../../util/dao")

const getProjectsData = async (req) => {
    const query = `SELECT * FROM projects`
    const result = await getData(req.pool, query)
    return result
}

const postProjectsData = async (req, payload) => {
    const {title,image,demo,description,technologies,category}=payload
    const query = `INSERT INTO projects (title, image, demo, description,technologies,category, date) VALUES (?, ?, ?, ?, ?, ?, NOW())`
    const values = [title, image, demo, description, technologies, category]
    const insert = await executeQuery(req.pool, query, values);
    if (insert) {
    return true;
    }
    return false;
}


module.exports = { getProjectsData ,postProjectsData}