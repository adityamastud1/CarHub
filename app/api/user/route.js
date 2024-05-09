import { connectMongoDB } from "../../../lib/mongodb";
import {NextResponse} from "next/server";

export async function POST(request){
    const {name, email}=await request.JSON();
    await connectMongoDB();
    await User.create({name, email});
    return NextResponse.json({message:"user registered"}, {status:201});
}
