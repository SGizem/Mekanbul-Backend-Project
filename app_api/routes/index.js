var express = require('express');
var router=express.Router();
var ctrlVenues=require('../controller/VenueController'); //! bu satırı ve alttaki satırı ekledik
var ctrlComments=require('../controller/CommentController');
router
.route('/venues')
.get(ctrlVenues.listVenues)
.post(ctrlVenues.addVenue);

router
.route('/venues/:venueid')
.get(ctrlVenues.getVenue)
.put(ctrlVenues.updateVenue)
.delete(ctrlVenues.deleteVenue);

router
.route('/venues/:venueid/comments')
.post(ctrlComments.addComment); //? ekleme özelliği post ile yapılır.

router
.route('/venues/:venueid/comments/:commentid')
.get(ctrlComments.getComment)
.put(ctrlComments.updateComment) //! bunlar kontrolcu metotlardır updateComment gibi
.delete(ctrlComments.deleteComment);

module.exports=router;
