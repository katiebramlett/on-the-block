const express = require('express')
const { login, getUserWallet, postUser, postWallet } = require('../controllers/user.controller')
const { getContract, getPendingTenant, getAwaitingLandlord, createContract } = require('../controllers/contract.controller')

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
router.get('/contracts/:userid/pending', getPendingTenant)
router.get('/contracts/:userid/pending', getAwaitingLandlord)

// contract actions -- POST 
router.post('/contracts', createContract)

module.exports = router;
