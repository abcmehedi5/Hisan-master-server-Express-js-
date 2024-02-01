const express = require("express")
const { API } = require("../../util/constant")
const {
postFeedbackDataController,
schema: feedbackSchema }
= require("../../controllers/Feedback/FeedbackController")
const Validator = require("../../middlewares/validator_middleware")
const feedbackRouter = express.Router()



feedbackRouter.post(
    API.API_CONTEXT + "feedback/post",
    Validator(feedbackSchema),
    postFeedbackDataController
)


module.exports=feedbackRouter