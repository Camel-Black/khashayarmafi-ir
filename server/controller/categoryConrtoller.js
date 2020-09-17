const category = require('../db/schema/category')


module.exports = {
    addCategory: async function (string) {        
        let cat = new category({
            name: string
        })
        try {
            await cat.save((err,result)=>{
                console.log(`${result} result of saving category`)
            })
        } catch (error) {
            return new Error("err in saving category")
        }
    },
    deleteCategoryById: async function(id){
        try {
            console.log(id)
            await category.deleteMany({name:{$in:id}})
        } catch (error) {
            return new Error('err happend in delete category by id')
        }
    },
    getAllCategories: async function(){
        await category.find((err,result)=>{
            if(err) return err
            else{
                return result
               
            }
        })
    },
    findCategoryByName: async function(name){
        var categorys = await category.find({name :name})
        return categorys
    },
    isExist: async function(k){
        console.log(k)
        var categorys = await category.find({name :k})
        if(categorys.length >=1){
            return true
        }
        else{
            return false
        }

    }
}