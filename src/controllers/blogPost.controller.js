const { blogPostValidations } = require('../utils/validations')
const { mapError } = require('../utils/errorMap')


const addPost = async (req, res) => {
  const postObject = req.body;

  const { message, type } = blogPostValidations(postObject);
  if (type) {
    return res.status(mapError(type).json({ message }))
  };
  
  const addPost = await blogPostService.addPost(postObject);

}