const Joi = require("joi");
const { getProjectsData, postProjectsData } = require("../../services/project/projectService");
const { MESSAGE } = require("../../util/constant");

const schema = Joi.object({
    title:Joi.string().min(5).max(500).required(),
    image:Joi.string().min(5).max(500).required(),
    demo:Joi.string().min(5).max(500).required(),
    description:Joi.string().min(5).required(),
    technologies:Joi.string().min(5).required(),
    category:Joi.string().min(5).max(500).required()
})


// get all projects
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

// post projects

const postProjectController = async(req,res) => {
   try {
       const payload = req.body 
       const result = await postProjectsData(req, payload)
       if (result) {
        return res.status(MESSAGE.SUCCESS_GET.STATUS_CODE).json({
            message: "Project post successfully",
            status: MESSAGE.SUCCESS_GET.STATUS_CODE,
            data: result,
        });
       }
   }
   catch (error) {
    return res
    .status(MESSAGE.SERVER_ERROR.STATUS_CODE)
    .send(MESSAGE.SERVER_ERROR.CONTENT);
   } 
}

module.exports = {
    getAllProjectsController,
    postProjectController,
    schema
}