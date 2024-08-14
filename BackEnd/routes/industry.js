const express = require("express")
const route = express.Router();
const IndustryController = require("../controllers/industry.controller")

route.post("/createindus",IndustryController.Createindustry)
route.get("/getIndusById/:id",IndustryController.getIndustryById)
route.get("/getallIndus",IndustryController.getallIndustry)
route.put("/updateIndus/:id",IndustryController.UpdateIndustry)
route.delete("/deleteIndusByid",IndustryController.deleteIndustry)
route.post("deleteManyindus",IndustryController.deleteManyIndustry)



/**
 * @swagger
 * /api/industry/createindus:
 *   post:
 *     tags:
 *        - Admin-Project-Industry
 *     summary: Create Industry
 *     description: Create Industry.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - IndustryName
 *            properties:
 *              IndustryName:
 *                type: string
 *     responses:
 *       201:
 *         description: Project
 */


/**
 * @swagger
 * /api/industry/getIndusById/{id}:
 *   get:
 *     tags:
 *        - Admin-Project-Industry
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
 * /api/industry/getallIndus:
 *   get:
 *     tags:
 *        - Admin-Project-Industry
 *     summary: Get all Industry
 *     description: Retrieve a list of data.
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Not authenticated
*/


/**
 * @swagger
 * /api/industry/updateIndus/{id}:
 *   put:
 *     tags:
 *        - Admin-Project-Industry
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
 * /api/industry/deleteManyindus:
 *   post:
 *     tags:
 *        - Admin-Project-Industry
 *     summary: Delete existing industry
 *     description: Delete existing industry.
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