var mongoose = require("mongoose");

var educationSchema = mongoose.Schema({
         userEmail: {
           type: String,
           required: true
         },
   		   universityName: String,
         gpa: Number,
	       degreeType: String,
	       major: String,
	       startDate: String,
	       endDate: String,
	       inProgress: Boolean,
	       transcripts: String,
	       courses: [
               {
               	courseName: String,
               	courseCode: String,
               	courseGrade: String,
               }
	       ]
});

module.exports = mongoose.model("Education", educationSchema);
