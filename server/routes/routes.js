const express = require('express')
const { login, getUserWallet, getUserSettingsInfo, postUser, postWallet, postUserSettings } = require('../controllers/user.controller')
const { getContract, postContract } = require('../controllers/contract.controller')

const router = express.Router()

// API Routes which map to controllers

// login endpoint
router.post('/login', login)

// user actions -- GET
router.get('/users/:userid/wallets', getUserWallet)

// user actions -- POST
router.post('/users/create', postUser)
router.post('/users/:userid/wallets/:walletaddr', postWallet)

// contract actions -- GET
router.get('/contracts/:userid', getContract)

// contract actions -- POST 
router.post('/contracts', postContract)

// ADDED BY CLAIRE - routes for getting and settings a user's settings
router.get('/users/:userid', getUserSettingsInfo)
router.post('/users/:userid', postUserSettings) // not sure these are right, check!

module.exports = router;
