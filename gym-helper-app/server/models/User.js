const mongoose = require("mongoose");

const setSchema = new mongoose.Schema({
    reps: Number,
    weight: Number
})

const performedExerciseSchema = new mongoose.Schema({
    name: String,
    sets: [setSchema]
})

const workoutSchema = new mongoose.Schema({
    time: Date,
    exercises: [performedExerciseSchema]
})

const workoutTemplateSchema = new mongoose.Schema({
    exercises: [performedExerciseSchema]
})

const exerciseSchema = new mongoose.Schema({
    name: String,
    category: String,
    bodyParts: [String]
})

const userSchema = new mongoose.Schema({
    username: String,
    workoutHistory: [workoutSchema], //! Consider moving this to its own model; Users could log a lot of workouts
    workoutTemplates: [workoutTemplateSchema],
    customExercises: [exerciseSchema],
    nutrition: {
        targetCalories: Number,
        macros: {
            protein: Number,
            carbs: Number,
            fats: Number
        }
    }
})

export const User = mongoose.model("user", userSchema);