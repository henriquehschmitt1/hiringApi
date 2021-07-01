import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ a: "asdasds" })
})

export = router
