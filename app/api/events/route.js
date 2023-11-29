import connectMongoDB from "@/libs/mongodb"
import Event from "@/models/event";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { eventName, description, primaryImage, supportingImage, tags } = await request.json();
    await connectMongoDB();
    await Event.create({ eventName, description, primaryImage, supportingImage, tags });
    return NextResponse.json({ message: "Event Created" }, { status: 201 });
}

export async function GET(request) {
    await connectMongoDB();
    const events = await Event.find();
    return NextResponse.json({ events })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    console.log(id)
    await connectMongoDB();
    await Event.findByIdAndDelete(id);
    return NextResponse.json({ message: "Event Deleted" }, { status: 200 })
}