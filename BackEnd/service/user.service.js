const Admin = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv/config");

const adminLogin = async(body) => {
    try {
        const {Email,Password} = body
        const isAdminExist = await Admin.findOne({Email})
        if (!isAdminExist) {
            throw new Error('Admin not found');
        }

        const isMatch = await bcrypt.compare(Password, isAdminExist.Password);

        if (!isMatch) {
            throw new Error('Incorrect password');
        }
        const token = jwt.sign(
            { id: isAdminExist._id, email: isAdminExist.Email },
            'process.env.JWT_SECRET', 
            { expiresIn: '30d' } 
        );
          return { token, admin: isAdminExist };
    } catch (error) {
        throw error;
    }
 }

const createadmin = async(body) => {
    try {
        const { Email, Password, AdminName,Number} = body;

        const existingAdmin = await Admin.findOne({ Email });
        if (existingAdmin) {
            throw new Error('Admin already exists');
        }

        const hashedPassword = await bcrypt.hash(Password, 10); 

        const newAdmin = new Admin({
            Email,
            Password: hashedPassword,
            Number,
            AdminName
        });

        await newAdmin.save();

        return { message: 'Admin registered successfully', admin: newAdmin };
    } catch (error) {
        throw error;
    }

 }

 module.exports = {
    createadmin,adminLogin
 }