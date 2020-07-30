const express = require("express")
const User = require("../model/userModel")

const profileRouter = express.Router();


profileRouter.get('/', (req, res) => {
    return res.render('homeProfile', {
        layout: false,
        name: 'Avinish',
        desc1: 'Web Developer',
        desc2: 'Competitive Programmer',
        displayImage: 'profile.jpg'
    });
})


profileRouter.get('/:username', async (req, res) => {

    const user = await User.findOne({ username: req.params.username });
    
    //console.log(req.params.username)

    if (user == null) {
        return res.redirect('/profile');
    }

    res.render('homeProfile', {
        layout: false,
        ...user.home,
        displayImage: 'temp.jpg'
    });
})


profileRouter.get('/:username/color', async (req, res) => {

    const user = await User.findOne({ username: req.params.username});

    if (user == null) {
        return res.status(404).send({});
    }

    res.status(200).send(user.color);
})




module.exports = profileRouter;