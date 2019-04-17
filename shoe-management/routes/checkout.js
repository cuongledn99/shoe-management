var mongoose = require('mongoose');
module.exports = router => {
    router.get('/checkout', async (req, res) => {
        try {
            //user logged in
            if (req.user) {
                let total = 0;
                let listItems = await mongoose.model('trade').find({ customer: req.user._id })
                    .populate('shoes')

                //count total price
                listItems.forEach(item => {
                    total += item.shoes.price;
                });
                console.log('list item from db: ' + listItems)
                console.log('total: ' + total)
                res.render('checkout', { listItems, user: req.user, total });
            }
            //user not logged in
            else {
                let items = req.session.items;
                let pickedShoes = [];
                let total = 0;
                for (i = 0; i < items.length; i++) {
                    let shoes = await mongoose.model('shoes').findById(items[i]);
                    pickedShoes.push({
                        name: shoes.name,
                        price: shoes.price
                    })
                }

                //count total price
                pickedShoes.forEach(item => {
                    total += item.price;
                });
                res.render('checkout', { pickedShoes, total, user: null })
            }


        } catch (error) {
            if (error) {
                console.log(error);
                throw error;
            }
        }

    })
}