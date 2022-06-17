const sellerController = require('../controllers/sellerController')
//
const verify =require('../libs/verifyToken')
const router = require('express').Router()


router.post('/seller/Register',verify,sellerController.addSeller)

router.post('/Register',sellerController.addUser)

router.post('/login',sellerController.loginuser)

router.put('/updateSeller',verify,sellerController.updateSeller)



module.exports =router 