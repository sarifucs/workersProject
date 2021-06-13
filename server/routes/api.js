const router = require('express').Router();
const worker = require('../controllers/worker');
// const user = require('../controllers/user');
// const book = require('../controllers/book');

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

router.get('/getAllWorkers', worker.getAllWorkers);
router.get('/getWorkerById/:_id', worker.getWorkerById);
router.post('/setNewWorker', worker.setNewWorker);
router.put('/updateWorker/:_id', worker.updateWorker);
router.post('/checkPermission', worker.checkPermission);

// router.get('/getAllUsers', user.getAllUsers);
// router.post('/postBookByUserId', book.postBookByUserId)
// router.delete('/deleteBook', book.deleteBook);

module.exports = router;