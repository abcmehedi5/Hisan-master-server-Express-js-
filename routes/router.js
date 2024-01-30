const express = require("express");
const appRouter = express.Router();
const blogRouter = require("./Blog/blog_routes");
const commentRouter = require("./Blog/comment_router");
const userRouter = require("./user/user_routes");
const projectRoute = require("./project/project_routes");
const teamMemberRouter = require("./TeamMembers/TeamMember_routes");

appRouter.use(blogRouter);
appRouter.use(commentRouter);
appRouter.use(userRouter);
appRouter.use(projectRoute)
appRouter.use(teamMemberRouter)
module.exports = appRouter;
