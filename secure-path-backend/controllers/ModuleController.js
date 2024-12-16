const Module = require('../models/modules.model');

exports.getAllModules = async (req,res) => {
    const modules = await Module.find();

    return res.json({modules: modules, success: true})
}

exports.getModule = async (req,res) => {
    const title = req.params.title;
    const module = await Module.findOne({"title":title});

    if (!module) {
        return res.status(404).json({message: "Module Not Found", success: false});
    } else {
        return res.status(200).json({success: true, module: module});
    }
}

exports.addModule = async (req,res) => {
    const difficulties = ["low", "medium","hard"];

    const {title, description, difficulty, resources, exercise} = req.body;

    // some checkings
    if (title === "") {
        return res.status(400).json({message: "Title cannot be empty"});
    }

    if (description === "") {
        return res.status(400).json({message: "Description cannot be empty"});
    }

    if (!(difficulties.includes(difficulty))) {
        return res.status(400).json({message: "Invalid difficulty"});
    }

    const newModule = await Module.create({
        title:title,
        description:description,
        difficulty: difficulty,
        resources:resources,
        exercise:exercise,
        updatedAt:null,
        deletedAt:null
    });

    if (newModule) {
        return res.status(201).json({success:true, message: "Module created successfully"});
    } else {
        return res.status(500).json({message: "Error creating the module"});
    }
}