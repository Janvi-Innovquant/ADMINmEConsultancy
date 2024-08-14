const express = require("express")
const route = express.Router();
const TechnologyController = require("../controllers/technology.controller")

route.post("/createtechno",TechnologyController.Createtechnology)
route.get("/gettechnoById/:id",TechnologyController.getTechnoById)
route.get("/getalltechno",TechnologyController.getallTechno)
route.put("/updatetechno/:id",TechnologyController.UpdateTechno)
route.delete("/deletetechnoByid",TechnologyController.deleteTechno)
route.delete("deleteManytechno",TechnologyController.deleteManyTechno)



/**
 * @swagger
 * /api/technology/createtechno:
 *   post:
 *     tags:
 *        - Admin-Project-Technology
 *     summary: Create Technology
 *     description: Create Technology.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - TechnologyName
 *            properties:
 *              TechnologyName:
 *                type: string
 *     responses:
 *       201:
 *         description: Project
 */


/**
 * @swagger
 * /api/technology/gettechnoById/{id}:
 *   get:
 *     tags:
 *        - Admin-Project-Technology
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
 * /api/technology/getalltechno:
 *   get:
 *     tags:
 *        - Admin-Project-Technology
 *     summary: Get all Technology
 *     description: Retrieve a list of data.
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Not authenticated
*/


/**
 * @swagger
 * /api/technology/updatetechno/{id}:
 *   put:
 *     tags:
 *        - Admin-Project-Technology
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
 * /api/technology/deleteManytechno:
 *   post:
 *     tags:
 *        - Admin-Project-Technology
 *     summary: Delete existing technology
 *     description: Delete existing technology.
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