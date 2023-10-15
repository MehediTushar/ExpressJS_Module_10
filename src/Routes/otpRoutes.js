const express = require('express');
const router = express.Router();
const otpController = require('../Controllers/OtpController'); 


router.post('/', otpController.createOTP);
router.get('/', otpController.getAllOTPs);
router.put('/:id', otpController.updateOTP);
router.delete('/:id', otpController.deleteOTP);

module.exports = router;