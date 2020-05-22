const express = require('express');
const router = express.Router();

// @route       GET    api/contacts
// @desc        Get all users contacts
// @access      Private
router.get('/', (req, res) => {
    res.json({getAllContacts: "User"})
})

// @route       POST     api/contacts
// @desc        Add new contacts
// @access      Private
router.post('/', (req, res) => {
    res.json({addContacts: "User"})
})

// @route       PUT    api/contacts/:id
// @desc        Update contacts
// @access      Private
router.put('/:id', (req, res) => {
    res.json({updateContacts: "User"})
})

// @route       DELETE    api/contacts/:id
// @desc        Delete contacts
// @access      Private
router.delete ('/:id', (req, res) => {
    res.json({updateContacts: "User"})
})

module.exports = router