const { Order, Post, Package } = require('../models');
const omise = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

exports.checkOutCreditCard = async (req, res, next) => {
  //
  const { token, packageId, requirement } = req.body;

  const { email } = req.user;
  const description = 'test';
  const purchasedPackage = await Package.findByPk(
    packageId,
    {
      include: {
        model: Post,
      },
    },
    { raw: true }
  );
  console.log(purchasedPackage);
  try {
    // Create customer for Omise
    const customer = await omise.customers.create({
      email: req.user.email,
      description: purchasedPackage.description,
      card: token,
    });
    // Create Charge for Omise
    const charge = await omise.charges.create({
      amount: purchasedPackage.price * 100,
      currency: 'thb',
      customer: customer.id,
    });

    // // If payment is not success then send the response
    if (charge.status !== 'successful') {
      return res.status(400).json({ message: 'transaction failed' });
    }
    const item = {
      buyerId: req.user.id,
      postId: purchasedPackage.postId,
      packageId,
      paymentId: charge.id,
      paymentDate: charge['paid_at'],
      durationCount: purchasedPackage.duration,
      reviseCount: purchasedPackage.revise,
      status: 'PENDING',
      requirement,
    };
    const order = await Order.create(item);
    // // If updateOrder failed send response
    if (!order) {
      return res.status(400).json({ message: 'transaction failed' });
    }
    res.json({
      order,
    });
    // ------------- Consider adding payment info table --------------
  } catch (err) {
    console.log(err);
    next(err);
  }
};
