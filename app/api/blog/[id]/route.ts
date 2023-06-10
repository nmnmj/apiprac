import prisma from "@/prisma"
import { main } from "../route"
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response)=>{
    const id = req.url.split("blog/")[1]
    try {
        await main()
        const post = await prisma.post.findFirst({where:{id}})
        return NextResponse.json({
            message:"success", post
        }, {
            status:200
        })
        
    } catch (error) {
        return NextResponse.json({
            message:"error", error
        },{
            status:500
        })
    }finally {
        await prisma.$disconnect()
    }
} 

export const PUT = async (req: Request, res: Response)=>{
    const id = req.url.split("blog/")[1]
    const {desc, title} = await req.json()
    try {
        await main()
        const post = await prisma.post.update({data: {title, desc }, where:{id}})
        return NextResponse.json({
            message:"success", post
        }, {
            status:200
        })
        
    } catch (error) {
        return NextResponse.json({
            message:"error", error
        },{
            status:500
        })
    }finally {
        await prisma.$disconnect()
    }
}

export const DELETE = async (req: Request, res: Response)=>{
    const id = req.url.split("blog/")[1]
    try {
        await main()
        const post = await prisma.post.delete({where:{id}})
        return NextResponse.json({
            message:"success", post
        }, {
            status:200
        })
        
    } catch (error) {
        return NextResponse.json({
            message:"error", error
        },{
            status:500
        })
    }finally {
        await prisma.$disconnect()
    }
}