const mongoose = require('mongoose');


module.exports = router => {
    router.get('/', (req, res) => {
        res.json('ok')
    })


    //add items that customer chose into database
    //only for login user
    router.post('/', (req, res) => {
        let shoes = req.body.shoes;
        console.log("TCL: shoes", shoes)
        let customer = req.user._id;
        console.log("TCL: customer", customer)

        let trade = new mongoose.model('trade')();
        trade.customer = customer;
        trade.shoes = shoes;
        trade.save((err, data) => {
            if (err) {
                console.log(err)
                throw err;
            }
            res.json({
                message: 'success',
                data: data
            })
        })
    })


    //add item to sesstion for user not logged in
    router.post('/notloggedin', (req, res) => {
        try {
            let shoes = req.body.shoes;
            if (req.session.items) {
                let cart = req.session.items;
                cart.push(shoes);
                req.session.items = cart;
            }
            else {
                let cart = [];
                cart.push(shoes);
                req.session.items = cart;
            }
            res.json({
                message: 'add to cart success',
                data: req.session.items
            });
        } catch (error) {
            if (error) {
                console.log(error);
                throw error;
            }
        }

    })
}