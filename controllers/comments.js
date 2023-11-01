const RecipeModel = require("../models/recipe");

module.exports = {
    create,
    deleteComment,
}

async function create(req, res){
    try{
        const RecipeDoc = await RecipeModel.findById(req.params.id);
        console.log(RecipeDoc);
        console.log(req.body, "<==== contents of form");

        req.body.user = req.user._id;
        req.body.userName = req.user.name;

        RecipeDoc.comments.push(req.body);
        await RecipeDoc.save();

        console.log(RecipeDoc, "<=== updated doc")
        res.redirect(`/recipes/${req.params.id}`);

    } catch(err){
        res.send(err)
    }
}

async function deleteComment(req, res){
    console.log(req.user);

    try {
        const recipeDoc = await RecipeModel.findOne({
            "comments._id": req.params.id,
        })
        
        console.log(recipeDoc);

        recipeDoc.comments.remove(req.params.id);

        await recipeDoc.save();

        res.redirect(`/recipes/${recipeDoc._id}`)
    
    } catch(err){
        res.send(err);
    }

}