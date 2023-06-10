type Post ={
    id: string, 
    title: string, 
    desc: string,
    date: Date
}

let posts: Post[] =[]

export const getPosts =()=> posts

export const addPost = (post: Post)=>{
    posts.push(post)
}

export const deletePost = (id: string)=>{
    posts = posts.filter((post)=>{
        return post.id !== id
    })
}

export const updatePost = (id:string, title:string, desc:string)=>{
    const post = posts.find((post)=>{
        return post.id === id
    })
    if(post){
        post.title = title
        post.desc = desc
    }else{
        throw new Error("NO Post Found")
    }
}

export const postById = (id:string)=>{
    return posts.find((post)=>{
        return post.id === id
    })
}