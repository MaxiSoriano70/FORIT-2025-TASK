import { Router } from "express";
import { taskManager } from "../../data/mongo/managers/manager.mongo.js";

const tasksRouter = Router();

const createOne = async (req, res, next) =>{
    try{
        const data = req.body;
        const response = await taskManager.createOne(data);
        res.status(201).json({
            response,
            method: req.method,
            url: req.url
        })
    }
    catch(error){
        next(error);
    }
}

const readAll = async (req, res, next) =>{
    try{
        const filter = req.query;
        const response = await taskManager.readAll(filter);
        if(response.length === 0){
            const error = new Error("Not found");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            response,
            method: req.method,
            url: req.url
        })
    }
    catch(error){
        next(error);
    }
}

const readById = async (req, res, next) =>{
    try{
        const { uid } = req.params;
        const response = await taskManager.readById(uid);
        if(response.length === 0){
            const error = new Error("Not found");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            response,
            method: req.method,
            url: req.url
        })
    }
    catch(error){
        next(error);
    }
}

const updateById = async (req, res, next) =>{
    try{
        const { uid } = req.params;
        const data = req.body;
        const response = await taskManager.updateById(uid, data);
        if(response.length === 0){
            const error = new Error("Not found");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            response,
            method: req.method,
            url: req.url
        })
    }
    catch(error){
        next(error);
    }
}

const destroyById = async (req, res, next) =>{
    try{
        const { uid } = req.params;
        const response = await taskManager.destroyById(uid);
        if(response.length === 0){
            const error = new Error("Not found");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            response,
            method: req.method,
            url: req.url
        })
    }
    catch(error){
        next(error);
    }
}

tasksRouter.post("/", createOne);
tasksRouter.get("/", readAll);
tasksRouter.get("/:uid", readById);
tasksRouter.put("/:uid", updateById);
tasksRouter.delete("/:uid", destroyById);

export default tasksRouter;