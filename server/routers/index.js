const { Router } = require('express')
const UserRouter = require("./UserRouter")
const router = new Router()

router.use('/user', UserRouter)

module.exports = router