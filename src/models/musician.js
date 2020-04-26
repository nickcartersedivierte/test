const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const MusicianSchema = new Schema( {

name: String,
instrument: String,
description: String,

});

module.exports = mongoose.model( 'musicians', MusicianSchema);