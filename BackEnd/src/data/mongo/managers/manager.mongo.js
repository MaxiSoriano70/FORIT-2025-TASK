import Task from "../models/task.model.js";

class Manager{
    constructor(model){
        this.model = model;
    }
    createOne = async (data) => await this.model.create(data);
    readAll = async (filter) => await this.model.find(filter).lean();
    readBy = async (data) => await this.model.findOne(data).lean();
    readById = async (id) => await this.model.findOne({ _id: id}).lean();
    updateById = async (id, data) => await this.model.findByIdAndUpdate({ _id: id}, data, { new: true});
    destroyById = async (id) => await this.model.findByIdAndDelete({ _id: id});
}

export default Manager;

const taskManager = new Manager(Task);

export { taskManager };