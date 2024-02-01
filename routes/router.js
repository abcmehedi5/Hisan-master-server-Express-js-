const express = require("express");
const appRouter = express.Router();
const blogRouter = require("./Blog/blog_routes");
const commentRouter = require("./Blog/comment_router");
const userRouter = require("./user/user_routes");
const projectRoute = require("./project/project_routes");
const teamMemberRouter = require("./TeamMembers/TeamMember_routes");
const feedbackRouter = require("./Feedback_routes/Feedback_router");

appRouter.use(blogRouter);
appRouter.use(commentRouter);
appRouter.use(userRouter);
appRouter.use(projectRoute)
appRouter.use(teamMemberRouter)
appRouter.use(feedbackRouter)
module.exports = appRouter;
