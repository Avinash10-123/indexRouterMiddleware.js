import express from 'express'

import log from '../demo/demo.js'
import {signUp} from '../demo/demo.js'

const router = express.Router()

router.get('/',log)
router.get('/:id',signUp)

export default router