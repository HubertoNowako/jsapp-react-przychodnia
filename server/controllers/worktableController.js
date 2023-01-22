import { restart } from "nodemon"
import { db } from "../db.js"

export const getWorktable = (req, res)=>{
    const q = "SELECT * FROM dyżury"
    db.query(q,[req.query], (err,data) => {
        if(err) return res.send(err);

        return res.status(200).json(data);
    });
}

export const getWorktables = (req, res)=>{
    
}

export const addWorktable = (req, res)=>{
    res.json("from controller")
}

export const deleteWorktable = (req, res)=>{
    res.json("from controller")
}

export const updateWorktable = (req, res)=>{
    res.json("from controller")
}