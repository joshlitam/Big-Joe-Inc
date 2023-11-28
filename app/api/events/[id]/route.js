import connectMongoDB from "@/libs/mongodb"
import Event from "@/models/event"
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newEventTitle: eventName, newDescription: description, newPrimaryImage: primaryImage, newSupportingImage: supportingImage, newTags: tags } = await request.json();
    await connectMongoDB();
    await Event.findByIdAndUpdate(id, { eventName, description, primaryImage, supportingImage, tags })
    return NextResponse.json({ message: "Event Updated" }, { status: 200 })
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const event = await Event.findOne({ _id: id })
    return NextResponse.json({ event }, { status: 200 })
}