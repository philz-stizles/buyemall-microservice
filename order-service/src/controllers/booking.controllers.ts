// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
// const Tour = require('../models/tourModel');
// const Booking = require('../models/userModel');
// const factory = require('./handlerFactory');
// const User = require('../models/userModel');

// exports.getCheckoutSession = catchAsync(async (req, res, next) => {
//   // Get the currently booked tour
//   const tourId = req.params.tourId;
//   const tour = await Tour.findById(tourId);
//   if (!tour) return next(new AppError('Resource does not exist', 404));

//   // Create checkout session
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: `${tour.name} Tour`,
//             description: tour.summary,
//             images: [`${req.protocol}://${req.get('host')}/img/tours/${tour.imageCover}`],
//           },
//           unit_amount: tour.price * 100, // expects cents, so convert to cents
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     // success_url: `${req.protocol}://${req.get('host')}/my-tours/?tour=${tourId}&creator=${req.user.id}&price=${tour.price}`,
//     success_url: `${req.protocol}://${req.get('host')}/my-tours?alert=booking`,
//     cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
//     customer_email: req.user.email,
//     client_reference_id: req.params.tourId,
//   });

//   console.log(session);

//   res.json({ status: true, data: session.id, message: 'success' });
// });

// // exports.createBookingCheckout = catchAsync(async (req, res, next) => {
// //   // This is only temporary because it is not secure, amyone can make booking without paying
// //   const { tour, creator, price } = req.query
// //   if(!tour && !creator && !price) return next()

// //   await Booking.create({ tour, creator, price })

// //   res.redirect(`${req.originalUrl.split('?')[0]}`)
// // })

// const createBookingCheckout = async session => {
//   console.log(session);
//   // This is only temporary because it is not secure, amyone can make booking without paying
//   const tour = session.client_reference_id;
//   const creator = (await User.findOne({ email: session.customer_email }))._id;
//   const price = session.amount_total / 100;

//   await Booking.create({ tour, creator, price });
// };

// exports.webhookCheckout = (req, res, next) => {
//   // This is only temporary because it is not secure, amyone can make booking without paying
//   const signature = req.headers['stripe-signature'];

//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_SECRET);
//   } catch (error) {
//     return res.status(400).send(`Webhook error: ${err.message}`);
//   }

//   if (event.type === 'checkout.session.completed') {
//     createBookingCheckout(event.data.object);
//   }

//   res.status(200).json({ received: true });
// };

// // USING HANDLER FACTORY
// exports.createBooking = factory.createOne(Booking);
// exports.getAllBookings = factory.getAll(Booking);
// exports.getBooking = factory.getOne(Booking);
// exports.updateBooking = factory.updateOne(Booking);
// exports.deleteBooking = factory.deleteOne(Booking);
