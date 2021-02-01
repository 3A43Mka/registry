const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
email: {type: String, required: true, unique: true},
password: {type: String, required: true},
// records: [{type: Types.ObjectId, ref: 'Record'}]
});

module.exports = model('User', schema);