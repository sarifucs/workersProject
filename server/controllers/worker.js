const Worker = require('../models/Worker');
const jwt = require('jsonwebtoken');

const getAllWorkers = async (req, res) => {
    try {
        console.log("getAllWorkers");
        let allWorkers = await Worker.find();
        await res.status(200).send(allWorkers);
    }
    catch (error) {
        res.status(500).send(error.massage);
    }
}

const getWorkerById = async (req, res) => {
    try {
        let worker = await Worker.findById(req.params._id);
        res.status(200).send(worker);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

//createWorker
const setNewWorker = async (req, res) => {
    try {
        const newWorker = {
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
            status: 0,
            isAdmin: false
        }
        const checkWorker = await Worker.findOne(newWorker);
        if (checkWorker == null) {//the worker is not exist
            const worker = await new Worker(newWorker);
            await worker.save();
            res.status(200).send(true);
        }
        else
            res.status(200).send(false);
    }
    catch (error) {
        res.status(500).send(error)
    }
}

const updateWorker = async (req, res) => {
    try {
        await Worker.findByIdAndUpdate(req.params._id, { $set: req.body });
        const checkWorker = await Worker.findOne(req.body);
        res.status(200).send(checkWorker);//check if worker is update
    }
    catch (error) {
        res.status(500).send(error);
    }
}

//loginWorker
const checkPermission = async (req, res) => {
    try {
        const worker = await Worker.findOne({ email: req.body.email, password: req.body.password });
        if (worker == null)
            res.status(200).send(false);
        else {
            console.log(worker);
            const encodedId = jwt.sign(worker._id.toString(), process.env.SECRET);
            // console.log(jwt.verify(encodedId, process.env.SECRET));
            let newWorker = {
                _id: encodedId,
                // email = worker.email,
                // password = worker.password,
                // status: worker.status,
                // isAdmin: worker.isAdmin
            }
            res.status(200).send(newWorker);
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { getAllWorkers, getWorkerById, setNewWorker, updateWorker, checkPermission };