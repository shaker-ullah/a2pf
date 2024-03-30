import { toast } from "react-toastify"


export const getData = () => {

    const storageData = localStorage.getItem('blogs')
    if (storageData) {
        return JSON.parse(storageData)
    }
    else {
        return []
    }
}


export const saveData = (blog) => {
    const blogs = getData()
    const isExist = blogs.find(b => b.id === blog.id)
    if (isExist) {
        toast('Already Exist')
    }
    else {
        blogs.push(blog)
        localStorage.setItem('blogs', JSON.stringify(blogs))
        toast('Your Book Successfully added')
    }
}