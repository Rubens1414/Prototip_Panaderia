import { model,Schema } from "mongoose";

export const BreadSchema = new Schema({
    name: {type: String, required: true},
    price : {type: Number, required: true},
    tags: {type: [String]},
    imageUrl:{type: String, required: true},
    origins: {type: [String], required: true},
    cookTime: {type:String, required: true},
},{
   
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
    timestamps: true,
});

export const BreadModel = model("Bread", BreadSchema);