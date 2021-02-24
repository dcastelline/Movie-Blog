const router = require("express").Router();
const db = require("../../models");

const controller = require("../../controllers/controller");
require('dotenv').config();

router.route("/mypics")
  .get(picsController.findAll)
  .post(picsController.create);


router
  .route("/:id")
  .get(picsController.findById)
  .put(picsController.update)
  .delete(picsController.remove);
////////create reference to img url in mongodb
router.route('/dbpic')
.post(picsController.create)

//////////////// use multer upload method to organize file data to readable format
router.post("/imgup", upload.single('file'),function(req,res, next){
  console.log(req.file)
  ///////////use cloudinary uploader to send file to bucket  and upload response
  cloudinary.uploader.upload(req.file.path, { tags: 'express_sample' })
    .then(function (image) {
      console.log('** file uploaded to Cloudinary service');
      console.dir(image);
      ////save the file path to temp folder and delete file
      console.log(req.file.path+"\n^^^^^^^^^^^^^^")
      fs.unlink(req.file.path, err=>{if(err){console.log(err)}})
      res.json(image.url)
    })
    .then(function () {
      console.log('** photo saved');
    })
})

module.exports = router;

//Movie information 
async function getMovie() {
	await fetch("https://ott-details.p.rapidapi.com/search?title=%20endgame&page=1", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "bc1026b9b5msh09f9bd72ecaf669p16f9e1jsn203e48375d38",
			"x-rapidapi-host": "ott-details.p.rapidapi.com"
    }
  })
  .then(response => response.json())
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
}
// platform information
async function getPlatform() {
	await fetch("https://ott-details.p.rapidapi.com/getPlatforms?region=IN", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "bc1026b9b5msh09f9bd72ecaf669p16f9e1jsn203e48375d38",
			"x-rapidapi-host": "ott-details.p.rapidapi.com"
		}
	})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
}


