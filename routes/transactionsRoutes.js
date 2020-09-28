const express = require('express');
const router = express.Router();

const { getTransactions, createTransaction, deleteTransaction } = require('../controllers/transactionsController');

router
    .route('/')
    .get(getTransactions)
    .post(createTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);


module.exports = router;