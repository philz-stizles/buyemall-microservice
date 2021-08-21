// const mongoose = require('mongoose');
// const validator = require('validator');
// const slugify = require('slugify');

// // Put as much business logic in the models to keep the controllers as simple and lean as possible
// const tourSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'A tour must have a name'],
//       trim: true,
//       unique: true,
//       maxLength: [40, 'A tour name must not be more than 40 characters'],
//       minLength: [10, 'A tour name must not be less than 10 characters'],
//       // validate: [validator.isAlphanumeric, 'Tour name must only contain characters']
//     },
//     duration: { type: Number, required: [true, 'A tour must have a duration'] },
//     maxGroupSize: {
//       type: Number,
//       required: [true, 'A tour must have a group size'],
//     },
//     difficulty: {
//       type: String,
//       required: [true, 'A tour must have a difficulty'],
//       enum: {
//         values: ['easy', 'medium', 'difficult'],
//         message: 'Difficulty should either be easy, medium or difficult',
//       },
//     },
//     ratingsAverage: {
//       type: Number,
//       default: 4.5,
//       min: [1.0, 'Rating must be above 1'],
//       max: [5.0, 'Rating must be below 5.0'],
//       set: val => Math.round(val * 10) / 10, // rounding up decimals
//     },
//     ratingsQuantity: { type: Number, default: 0 },
//     price: { type: Number, required: [true, 'A tour must have a price'] },
//     discount: {
//       type: Number,
//       validate: {
//         // CUSTOM VALIDATOR - Note that this would only work on save or create, thus,
//         // 'this' will only point to current doc on new document creation
//         validator: function (value) {
//           return value < this.price;
//         },
//         message: 'Discount price({VALUE}) should be below price', // VALUE will contain the value that was inputed
//       },
//     },
//     summary: {
//       type: String,
//       required: [true, 'A tour must have a summary'],
//       trim: true,
//     },
//     description: { type: String, trim: true },
//     imageCover: {
//       type: String,
//       required: [true, 'A tour must have a cover image'],
//     },
//     images: [String],
//     createdAt: { type: Date, required: true, default: Date.now },
//     modifiedAt: { type: Date },
//     slug: String,
//     secretTour: { type: Boolean, default: false },
//     startDates: [Date],
//     startLocation: {
//       // GeoJSON -
//       type: { type: String, default: 'Point', enum: ['Point'] },
//       coordinates: [Number],
//       address: String,
//       description: String,
//     },
//     locations: [
//       {
//         type: { type: String, default: 'Point', enum: ['Point'] },
//         coordinates: [Number],
//         address: String,
//         description: String,
//         day: Number,
//       },
//     ],
//     guides: [{ type: mongoose.Schema.ObjectId, ref: 'Users' }], // Child referencing
//   },
//   {
//     toJSON: { virtuals: true }, // Turn on virtuals to display virtuals(both populated's and properties)
//     // when transformed to JSON
//     toObject: { virtuals: true }, // Turn on virtuals to display virtual(both populated's and properties)
//     // when transformed to Object
//   }
// );

// // Index
// tourSchema.index({ price: 1, ratingsAverage: -1 }); // compound Index [ 1 = ASC, -1 = DESC]
// tourSchema.index({ slug: 1 });
// tourSchema.index({ startLocation: '2dsphere' }); // 2d or 2dsphere

// // Virtual Populate Property - IMPORTANT!! - Turn on virtuals using { toJSON: { virtuals: true },
// // toObject: { virtuals: true } }
// // Review has been implemented using child referencing. By default, The Tour parent does not really know about
// // its Reviews. In this case we want the Tour to know about its reviews. To implement this, we use
// // With this implementation, the Reviews will be added to the Tours without persisting them to the database
// tourSchema.virtual('reviews', {
//   ref: 'Reviews',
//   foreignField: 'tour',
//   localField: '_id',
// });

// // Virtual Properties
// tourSchema.virtual('durationWeeks').get(function () {
//   return this.duration / 7;
// });

// // DOCUMENT MIDDLEWARE =>
// // pre() - This runs before save() and create(), it doent run on insert().
// // You can have multiple pre() middlewares
// tourSchema.pre('save', function (next) {
//   this.slug = slugify(this.name, { lower: true });

//   next();
// });

// // post() - This runs after save() and create(), it doent run on insert()
// tourSchema.post('save', function (doc, next) {
//   console.log(doc);

//   next();
// });

// // QUERY MIDDLEWARE =>
// // Query Middleware - pre() - Using regex. This runs before
// tourSchema.pre(/^find/, function (next) {
//   this.populate({ path: 'guides', select: '_id name email role' }); // Rather than duplicating the populate query
//   // tfor every static method you use to retrieve the Model data, define it as a pre method and it will apply
//   // for all find queries - findById, findOne etc

//   next();
// });

// // Query Middleware - pre() - This runs before
// tourSchema.pre(/^find/, function (next) {
//   this.find({ secretTour: { $ne: true } });
//   this.start = Date.now(); // milliseconds
//   next();
// });

// // post() - This runs after save() and create(), it doent run on insert()
// tourSchema.post(/^find/, function (docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds`);

//   next();
// });

// // Aggregate Middleware - pre() - This runs before
// tourSchema.pre('aggregate', function (next) {
//   this.pipeline().push({ $match: { secretTour: { $ne: true } } });
//   console.log(this.pipeline());
//   next();
// });

// module.exports = Tour = mongoose.model('Tours', tourSchema);
