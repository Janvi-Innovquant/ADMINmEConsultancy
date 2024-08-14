const express = require("express")
const router = express.Router();

const Project = require("../routes/project")
const Category = require("../routes/category")
const Industry = require("../routes/industry")
const Technology = require("../routes/technology")

router.use("/project",Project)
router.use("/category",Category)
router.use("/industry",Industry)
router.use("/technology",Technology)

module.exports = router

