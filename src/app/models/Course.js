const mongoose = require('mongoose')
// const slug = require('../../../node_modules/mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')
const Schema = mongoose.Schema

const Course = new Schema({
    name: {type: String, require: true},
    description: {type: String},
    image: {type: String},
    videoId: {type: String, require: true},
    slug: {type: String, unique: true},
    level: {type: String},
},{
    timestamps: true,
}) 

Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true
})

module.exports = mongoose.model('Course', Course)