const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const MusicianSchema = new Schema( {

name: String,
description: String,

});

module.exports = mongoose.model( 'musicians', MusicianSchema);