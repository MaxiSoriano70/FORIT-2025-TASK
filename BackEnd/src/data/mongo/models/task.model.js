import { Schema, model } from "mongoose";

const collection = "tasks";

const schema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        match: /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]{3,}$/
    },
    descripcion: {
        type: String,
        minlength: 3,
        default: undefined
    },
    completed: {
        type: Boolean,
        default: false
    }
    }, {
    timestamps: true
});

const Task = model(collection, schema);

export default Task;
