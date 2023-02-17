const User = require('../Model/UserSchema');

async function AddToCart (req, res){
    const { Product, Email } = req.body;
    try {
        const updatedUser = await User.findOneAndUpdate(
            { Email: Email }, // first finding user with this email
            { $push: { Cart: Product } }, // then updating the cart $push method do it push product to end of the cart
            { new: true } // Return the updated user after the update
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message : 'Server error' });
    }
}

module.exports = {AddToCart}