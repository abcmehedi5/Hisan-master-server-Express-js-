const { getProjectsData } = require("../../services/project/projectService");
const { MESSAGE } = require("../../util/constant");

const getAllProjectsController = async (req, res) => {
    try {
        const projectData = await getProjectsData(req);
        if (projectData) {
            return res.status(MESSAGE.SUCCESS_GET.STATUS_CODE).json({
                message: "Project retrieved successfully",
                status: MESSAGE.SUCCESS_GET.STATUS_CODE,
                data: projectData,
            });
        } else {
            return res.status(MESSAGE.NOT_FOUND.STATUS_CODE).json({
                message: "Project not found",
                status: MESSAGE.NOT_FOUND.STATUS_CODE,
            });
        }
    } catch (error) {
        console.log(error);
        return res
            .status(MESSAGE.SERVER_ERROR.STATUS_CODE)
            .send(MESSAGE.SERVER_ERROR.CONTENT);
    }
};

module.exports = { getAllProjectsController }