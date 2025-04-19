import validator from "validator";
import bcrypt from "bcrypt";
import {v2 as cloudinary} from "cloudinary";
import doctorModel from "../Models/doctorModel.js";

// API for adding  doctor

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    //const imageFile = req.file

    //checking for all data to add Doctor
    if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
      return res.json({ message: "Please fill all the fields" });
    }
    //validating email formate
    if (!validator.isEmail(email)) {
      return res.json({ message: "Please enter a valid email" });
      
    }
    //validating password formate
    if (password.length < 8) {
      return res.json({ message: "Password must be at least 8 characters" });
    }
   // hashing doctor password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);
    
    //uploding image file
    //  const imageUpload = await cloudinary.uploader.upload(imageFile, {resource_type:"image"});
    //  const imageURL = imageUpload.secure_url;
     
    //creating doctor object
    const doctorData = {
      name,
      email,
      // image:imageURL,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address : JSON.parse(address),
      date: Date.now(),
      
    };
    //saving doctor to database
    const newDoctor =  new doctorModel(doctorData);
    await newDoctor.save();
    res.json({ success:true , message: "Doctor added successfully" });

  } catch (error) {
    console.log(error);
    res.json({ success:false , message: "Internal server error" });
  }
};

export { addDoctor };
