const express = require("express")
const route = express.Router();
const CategoryController = require("../controllers/category.controller")

route.post("/createcategory",CategoryController.Createcategory)
route.get("/getcategoryById/:id",CategoryController.getCategoryById)
route.get("/getallcategory",CategoryController.getallCategory)
route.put("/updatecategory/:id",CategoryController.UpdateCategory)
// route.delete("/deletecategoryByid",CategoryController.deleteCategory)
route.post("/deleteManycat",CategoryController.deleteManyCategory)



/**
 * @swagger
 * /api/category/createcategory:
 *   post:
 *     tags:
 *        - Admin-Project-Category
 *     summary: Create Category
 *     description: Create Category.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - CategoryName
 *            properties:
 *              CategoryName:
 *                type: string
 *     responses:
 *       201:
 *         description: Project
 */


/**
 * @swagger
 * /api/category/getcategoryById/{id}:
 *   get:
 *     tags:
 *        - Admin-Project-Category
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
 * /api/category/getallcategory:
 *   get:
 *     tags:
 *        - Admin-Project-Category
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
 * /api/category/updatecategory/{id}:
 *   put:
 *     tags:
 *        - Admin-Project-Category
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
 * /api/category/deleteManycat:
 *   post:
 *     tags:
 *        - Admin-Project-Category
 *     summary: Delete existing category
 *     description: Delete existing category.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *            properties:
 *              id:
 *                type: array
 *                default: []
 *     responses:
 *       201:
 *         description: Created
 */



module.exports = route