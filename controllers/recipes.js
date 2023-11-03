const RecipeModel = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    recommended,
    create,
    show,
    update,
    showUpdate
}


//function shows the index page
async function index(req, res){
    console.log(req.user)
    try{
        const recipeDocuments = await RecipeModel.find({});
        console.log('recipe documents', recipeDocuments);
        res.render("recipes/index", {recipeDocs: recipeDocuments});
    } catch (err){
        console.log(err);
    }
}

//functions shows the individual recipes
async function show(req, res){
    try{
        const recipeDocument = await RecipeModel.findById(req.params.id)

        console.log(recipeDocument);

        res.render('recipes/show', {recipe: recipeDocument})
    } catch (err){
        res.send(err);
    }
}

//functions shows the update recipe page
async function showUpdate(req, res){
    try{
        const recipeDocument = await RecipeModel.findById(req.params.id)

        console.log(recipeDocument);

        res.render('recipes/showUpdate', {recipe: recipeDocument})
    } catch (err){
        res.send(err);
    }
}

//shows the new recipe page
async function newRecipe(req, res){
    res.render('recipes/new')
}
//show sthe recommended page
async function recommended(req, res){
    res.render('recipes/recommended')
}
//creates a new recipe
async function create(req, res, next){
    console.log(req.body, '<========= contents of the form')
    console.log(req.user);

    try {
        const recipeDoc = await RecipeModel.create(req.body);

        console.log(recipeDoc, '<====== recipe created in db');
        res.redirect('/recipes');
    } catch (err){
        console.log(err);
        res.send(err);
    }
}
//updates a recipe
async function update(req, res){

    try{
        const bodyUpdate = req.body
        console.log(bodyUpdate, "<+++++++++++++++++++++++++++++++++++++++");
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedRecipe, "<============== updated recipe")
        res.redirect(`/recipes`);
    } catch (err){
        res.send(err);
    }

}