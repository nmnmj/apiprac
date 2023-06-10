import { deletePost, postById, updatePost } from "@/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req:Request, res:Response)=>{
    const id = req.url.split("blogs/")[1]
    // console.log(id)
    const post = postById(id)
    try {
        if(!post){
            return NextResponse.json({
                message:"Error", 
            }, {
                status: 404
            })
        }
        return NextResponse.json({
            message:"OK",
            post
        },{
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message:"Error", 
            error
        }.error, {
            status: 500
        })
    }
}

export const PUT = async (req: Request,res: Response)=>{
    const id= req.url.split("blogs/")[1]
    console.log(id)
    const {title, desc} = await req.json()
    console.log(title, desc)
    try {
        updatePost(id, title, desc)
        return NextResponse.json({
            message:"OK",
        },{
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message:"Error", 
            error
        }.error, {
            status: 500
        })
    }
}

export const DELETE = async (req:Request, res:Response)=>{
    const id = req.url.split("blogs/")[1]
    try {
        deletePost(id)
        return NextResponse.json({
            message:"OK"
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            message:"Error", 
            error
        }.error, {
            status: 500
        })   
    }
}