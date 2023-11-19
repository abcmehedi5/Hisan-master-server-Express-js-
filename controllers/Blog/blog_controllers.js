const Joi = require("joi");
const { MESSAGE } = require("../../util/constant");
const { blogServices, getBlog } = require("../../services/Blog/blog_service");

const schema = Joi.object({
  title: Joi.string().min(1).max(128).required(),
  content: Joi.string().min(1).max(128).required(),
  image: Joi.string().min(1).max(128).required(),
  category: Joi.string().min(1).max(128).required(),
  date: Joi.string().min(1).max(128).required(),
  email: Joi.string().email().min(5).max(50).required(),
  author: Joi.string().min(1).max(128).required(),
});


// create blog
const controller = async (req, res) => {
  try {
    const data = await blogServices(req, req.body);
    if (data) {
      return res.status(MESSAGE.SUCCESS_GET.STATUS_CODE).json({
        message: "Blog created successfull",
        status: MESSAGE.SUCCESS_GET.STATUS_CODE,
        data,
      });
    }
    return res
      .status(MESSAGE.SUCCESS_GET.STATUS_CODE)
      .json({ message: "blog not created" });
  } catch (error) {
    console.log(error);
    return res
      .status(MESSAGE.SERVER_ERROR.STATUS_CODE)
      .send(MESSAGE.SERVER_ERROR.CONTENT);
  }
};

// get blog by id
const getBlogById = async (req, res) => {
  try {
    const id = req.params.id; // Assuming the blog ID is passed in the URL parameters
    console.log({ id });
    const blogData = await getBlog(req, id);
    if (blogData) {
      return res.status(MESSAGE.SUCCESS_GET.STATUS_CODE).json({
        message: "Blog retrieved successfully",
        status: MESSAGE.SUCCESS_GET.STATUS_CODE,
        data: blogData,
      });
    } else {
      return res.status(MESSAGE.NOT_FOUND.STATUS_CODE).json({
        message: "Blog not found",
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

module.exports = { controller, schema, getBlogById };
