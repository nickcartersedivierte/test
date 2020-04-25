const express = require('express');
const router = express.Router();

const Musician = require ('../models/musician');


router.get('/', async (req, res) =>{
    const musicians = await Musician.find();
    
    res.render('index', {
        musicians
});
});

router.post('/add', async (req, res) =>{
    
    const musician = new Musician(req.body);
    await musician.save();
    res.redirect('/');
});

router.get ('/edit/:id', async (req, res) =>{
 
    const { id } = req.params;
    const musician = await Musician.findById(id);
    res.render('edit', {

        musician
    });

});

router.post('/edit/:id', async (req, res) =>{

     const { id } = req.params;
    await Musician.update ({ _id: id }, req.body);
     res.redirect('/');

});


router.get('/delete/:id', async (req, res) => {

    const { id } = req.params;
    await Musician.remove({_id: id });
     res.redirect('/');
});




module.exports = router;


