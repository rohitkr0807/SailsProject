/**
 * TimeInputController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  create(req,res) {
    TimeInput.create({
      userId: req.body.userId,
      status: req.body.status,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    }).then((result) => {
      res.ok(result);
    }).catch((error) => {
      res.serverError(error);
    });
  },

  find(req,res) {
    TimeInput.find({
      userId: req.param.userId,
    }).then((result) => {
      res.ok(result);
    }).catch((error) => {
      res.serverError(error);
    });
  },
};


