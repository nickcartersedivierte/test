const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const MusicianSchema = new Schema( {

name: { type: String, unique: true},
description: String,

});

module.exports = mongoose.model( 'musicians', MusicianSchema);