const getAllTasks = (req,res)=>{
    res.send("Here is a list of all tasks.")    
}

const createTask = (req,res)=>{
    res.send("A new task is created.")    
}

const getTask = (req,res)=>{
    res.json(({id: req.params.id}))
}

const updateTask = (req,res)=>{
    res.send("The task is updated.")
}


const deleteTask = (req,res)=>{
    res.send("The task is deleted.")
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};