const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const complaintController = {};

complaintController.findComplaints = async (req, res, next) => {
  try {
    const { id } = res.locals.train;
    const complaints = await prisma.complaint.findMany({
      where: { trainId: id },
      include: {
        train: true,
        user: true
      }
    });
    res.locals.complaints = complaints;
    return next();
  } catch (err) {
    console.log(err);
  }
};

complaintController.createComplaint = async (req, res, next) => {
  try {
    const trainId = res.locals.train.id;
    const userId = req.body._id;
    await prisma.complaint.create({
      data: {
        message: req.body.complaint,
        user: {
          connect: {
            id: userId
          }
        },
        train: {
          connect: {
            id: trainId
          }
        }
      }
    });
    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = complaintController;
