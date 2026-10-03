import express from 'express'
import { getAllContact, newContact } from '../Controllers/contact.js';

const router = express.Router();

// new contact
// @api dsc :- creating contact
// @api method :- post
// @api endPoint :- /api/contact/new

router.post('/new',newContact);

// get all contact
router.get('/',getAllContact)

export default router;