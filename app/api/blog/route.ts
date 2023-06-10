import prisma from "@/prisma"
import { NextResponse } from "next/server";

export async function main(){
    try {
        await prisma.$connect();
        
    } catch (error) {
        return Error("DB connection failed")    
    }
}

export const GET = async (req: Request, res: Response)=>{
    console.log("GET")
    try {
        await main()
        const posts = await prisma.post.findMany();
        return NextResponse.json({
            message: "success", posts
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            message:"error", error
        },{
            status:500
        })
    } finally {
        await prisma.$disconnect()
    }
}

export const POST = async (req: Request, res: Response)=>{
    console.log("Post")
    try {
        const { title, desc } = await req.json()
        await main()
        const post = await prisma.post.create({
            data: {desc, title}
        })
        return NextResponse.json({
            message:"success",
            post
        },{
            status: 201
        })
    } catch (error) {
        return NextResponse.json({
            message:"error", error
        },{
            status:500
        })
    } finally {
        await prisma.$disconnect()
    }
}