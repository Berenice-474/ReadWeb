const {Router} = require('express');
const router = Router();


router.get('/', (req,res) => {
    res.send('hola juansiño')
});



module.exports = router;