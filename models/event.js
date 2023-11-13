import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
    {
        eventName:String,
        description: String,
        primaryImage: String,
        supportingImage: [String],
        tags: [String]
    }, {
        timestamps: true
    }
)

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;