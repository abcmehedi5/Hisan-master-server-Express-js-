 const Joi = require("joi");
const { createFeedback } = require("../../services/feedback/feedbackService");
const { MESSAGE } = require("../../util/constant");

const schema = Joi.object({
    name: Joi.string().min(1).max(50).required(),
    email: Joi.string().min(1).max(50).required(),
    message:Joi.string().min(1).max(500).required()
})

// feedback post
const postFeedbackDataController = async (req, res) => {
    try {
        const information = req.body
        const result = await createFeedback(req.pool, information)
        if (result) {
            return res.status(MESSAGE.SUCCESS_GET.STATUS_CODE).send(information);
        }
    }
    catch (error) {
        return res.status(MESSAGE.SERVER_ERROR.STATUS_CODE).json({
        message: "Users not found",
        status: MESSAGE.SERVER_ERROR.STATUS_CODE,
      })
    }
}



module.exports = {
    postFeedbackDataController,
    schema
}