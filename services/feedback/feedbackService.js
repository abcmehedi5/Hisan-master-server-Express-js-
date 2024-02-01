const { executeQuery } = require("../../util/dao");

const createFeedback = async(pool,payload) => {
const {
name,
email,
message
} = payload
const query = `INSERT INTO feedback (name, email, message, date) VALUES (?, ?, ?, NOW())`
const values = [name, email, message]
const insert = await executeQuery(pool, query, values);
if (insert) {
    return true;
}
return false;
}


module.exports = {
    createFeedback
}