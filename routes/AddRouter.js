const adController = require('../controllers/advertismentController')

const verify =require('../libs/verifyToken')
const router = require('express').Router()
const upload = require('../libs/imgupload')


router.post('/addAdvertisement',verify,upload.single("image"),adController.addAdvertisment)
router.get('/allAdvertisements',adController.getAllAdvertisments)
router.get('/:id' ,adController.getOneAdvertisment)
router.put('/:id',verify,adController.updateAdvertisment)
router.delete('/:id',verify,adController.deleteAdvertisment)

module.exports =router