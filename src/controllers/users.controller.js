const users = require("../models/data");

class UsersController {
    add = (req, res) => {
        const { name, email, isActive } = req.body;

        const data = { id: Math.random() * Math.random(), name, email, isActive, role: "user" };
        users.push(data);

        res.status(201).json({ 
            message: "Added Successfully",
            data
        })
    }

    getAll = (req, res) => {
        res.status(200).json({ 
            message: "Fetched Data Successfully",
            data: users
        })
    }

    getOne = (req, res) => {
        // id
        const id = +req.params.id;

        const user = users.find(e => e.id === id);

        if(!user) return res.status(404).json({ message: "Not Found" });

        res.status(200).json({
            message: "Got User successfully",
            user
        })
    }

    update = (req, res) => {
        const id = +req.params.id;

        const user = users.find(e => e.id === id);

        if(!user) return res.status(404).json({ message: "Not Found" });

        const { name, email } = req.body;

        user.email = email;
        user.name = name;

        res.status(200).json({
            message: "Updated User successfully",
            user
        })
    }

    remove = (req, res) => {
        const id = +req.params.id;

        const user = users.find(e => e.id === id);

        if(!user) return res.status(404).json({ message: "Not Found" });

        users = users.filter(e => e.id !== id);

        res.status(200).json({
            message: "Deleted User successfully"
        })
    }
}

module.exports = new UsersController();