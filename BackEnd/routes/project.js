const express = require('express')
const route = express.Router()
const upload = require("../middleware/upload")
const ProjectController = require("../controllers/project.controller")

route.post("/createproject",upload.array('image', 10), ProjectController.Createproject)
route.get("/getprojectbyId/:id",ProjectController.getProjectById)
route.get("/getallproject",ProjectController.getallProject)
route.put("/updateproject/:id",ProjectController.UpdateProject)
route.delete("/deleteproject/:id",ProjectController.deleteProject)
route.post("/deletemanyproject",ProjectController.deleteManyProject)


/**
 * @swagger
 * /api/project/createproject:
 *   post:
 *     tags:
 *        - Admin-Project
 *     summary: Create Project
 *     description: Create Project.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - projectName
 *              - category
 *              - technology
 *              - industry
 *            properties:
 *              projectName:
 *                type: string
 *              category:
 *                type: string
 *              technology:
 *                type: string
 *              industry:
 *                type: string
 *              country:
 *                type: string
 *              startDate:
 *                type: string
 *              endDate:
 *                type: string
 *     responses:
 *       201:
 *         description: Project
 */


/**
 * @swagger
 * /api/project/getprojectbyId/{id}:
 *   get:
 *     tags:
 *        - Admin-Project
 *     summary: Get data from id
 *     description: Retrieve a data from id.
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *            required: true
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Not authenticated
*/


/**
 * @swagger
 * /api/project/getallproject:
 *   get:
 *     tags:
 *        - Admin-Project
 *     summary: Get all Projects
 *     description: Retrieve a list of data.
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Not authenticated
*/


/**
 * @swagger
 * /api/project/updateproject/{id}:
 *   put:
 *     tags:
 *        - Admin-Project
 *     summary: Update existing data
 *     description: Update existing data.
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *            required: true
 *     requestBody:
 *      required: 
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *     responses:
 *       201:
 *         description: Updated
 */


/**
 * @swagger
 * /api/project/deletemanyproject:
 *   post:
 *     tags:
 *        - Admin-Project
 *     summary: Delete existing projects
 *     description: Delete existing projects.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - ids
 *            properties:
 *              ids:
 *                type: array
 *                default: []
 *     responses:
 *       201:
 *         description: Created
 */

module.exports = route