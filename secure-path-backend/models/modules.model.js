const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Module Schema with flexibility
const ModuleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    resources: [{ type: Schema.Types.Mixed }], // Use Mixed type for flexible resource objects
    exercises: [{ type: Schema.Types.Mixed }],  // Use Mixed type for flexible exercise objects
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    deletedAt: { type: Date, required: false },
  },
  { strict: false } // Allow documents to have fields not defined in the schema
);

module.exports = mongoose.model("Module", ModuleSchema);
