const Task = require('../models/Task')

module.exports = class TaskController{

    static createTask(req,res){

        res.render('tasks/create')
    }

    static async createTaskSave(req,res){

        const task = {
            ramo: req.body.ramo,
            description: req.body.description,
            funcionarios: req.body.funcionarios,
            matriz: req.body.matriz,
            cnpj: req.body.cnpj,
            filiais: req.body.filiais,
            fundacao: req.body.fundacao,
            done: false,
        }

        const dataatual = new Date()

        const anoatual = dataatual.getFullYear()
    
        task.fundacao = anoatual - task.fundacao



        await Task.create(task)
            .then(res.redirect('/tasks'))
    }

    

    static async showTasks(req,res){
        await Task.findAll({raw : true})
        .then((data)=>{
            let emptyTasks = false

            if (data.length === 0){
                emptyTasks = true
            }

            res.render('tasks/all',{tasks:data, emptyTasks})
        }).catch((err) => console.log(err))
    }

    static updateTask(req,res){
        const id = req.params.id

        Task.findOne({where : {id:id}, raw:true})
        .then((data)=> {
            res.render('tasks/edit',{task:data})
        })
        .catch((err) => console.log(err))
    }

    static async updateTaskPost(req,res){
        const id = req.body.id
        const task = {
            ramo: req.body.ramo,
            description: req.body.description,
            funcionarios: req.body.funcionarios,
            matriz: req.body.matriz,
            cnpj: req.body.cnpj,
            filiais: req.body.filiais,
            fundacao: req.body.fundacao,
        }

        const dataatual = new Date()

        const anoatual = dataatual.getFullYear()
    
        task.fundacao = anoatual - task.fundacao

        await Task.update(task,{where:{id:id}})
        .then(res.redirect('/tasks'))
        .catch((err) => console.log(err))
    }

    static async removeTask(req,res){
        const id = req.body.id

        await Task.destroy({where:{id:id}})
        .then(res.redirect('/tasks'))
        .catch((err) => console.log(err))
    }

    static async statusTask(req,res){
        const id = req.body.id

        const task = {
            done: req.body.done === '0' ? true : false,
        }

        await Task.update(task, {where: {id:id}})
        .then(await res.redirect('/tasks'))
        .catch((err) => console.log())
    }
}