const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true },
      size: {type:String, required: true}
    }
  ],
  user: {
    name: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  orderDetails: {
    create_time:String,
    id:String,
    payer:Object,
    purchase_units:Array
  }
});

module.exports = mongoose.model('Order', orderSchema);
