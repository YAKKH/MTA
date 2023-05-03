const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const trainController = {};

trainController.findTrain = async (req, res, next) => {
  try {
    const { train } = req.params;
    const trainUnique = await prisma.train.findFirst({
      where: { name: train }
    });
    res.locals.train = trainUnique;
    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = trainController;
