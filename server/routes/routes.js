const express = require('express');

const { login, getUserWallet, postUser, postWallet } = require('../controllers/user.controller');

const router = express.Router();

// API Routes which map to controllers

// login endpoint
router.post('/login', login)

// user actions -- GET
// router.get('users/{userid}')
router.get('/users/:userid/wallets', getUserWallet)

// user actions -- POST
router.post('/users/create', postUser);
router.post('/users/:userid/wallets/:walletaddr', postWallet)

// contract actions

module.exports = router;
