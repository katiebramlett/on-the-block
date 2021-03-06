const express = require('express')

const { login, getUserWallet, getUserSettingsInfo, postUser, postWallet, postUserSettings, postUpdateWallet } = require('../controllers/user.controller')
const { getContract, postContract, getPendingTenant, getAwaitingLandlord, createContract, getActiveContracts, getDeniedContracts, getTerminatedContracts, updateContractStatus } = require('../controllers/contract.controller')

const router = express.Router()

// API Routes which map to controllers

// login endpoint
router.post('/login', login)

// user actions -- GET
router.get('/users/:userid/wallets', getUserWallet)

// user actions -- POST
router.post('/users/create', postUser)
router.post('/users/:userid/wallets/:walletaddr', postWallet)

router.post('/users/:userid/updateWallet', postUpdateWallet)

// contract actions -- GET
router.get('/contracts/:userid', getContract)
router.get('/contracts/:userid/pending/tenant', getPendingTenant)
router.get('/contracts/:userid/pending/landlord', getAwaitingLandlord)
router.get('/contracts/:userid/active', getActiveContracts)
router.get('/contracts/:userid/denied', getDeniedContracts)
router.get('/contracts/:userid/terminated', getTerminatedContracts)

// contract actions -- POST 
router.post('/contracts', createContract)
router.post('/contracts/update', updateContractStatus) //?

// ADDED BY CLAIRE - routes for getting and settings a user's settings
router.get('/users/:userid', getUserSettingsInfo)
router.post('/users/:userid', postUserSettings) // not sure these are right, check!

module.exports = router;