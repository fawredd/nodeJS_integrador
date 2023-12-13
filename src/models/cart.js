const { DataTypes } = require('sequelize')
const sequelize = require('./connection')
const UserModel = require("./user");
const ProductModel = require("./producto")

const Cart = sequelize.define(
    'Cart',
    {
        cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        cart_envio: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue:0
        }
    },
    {
        timestamps: true,
    }
)
const CartItems = sequelize.define(
    'CartItems',
    {
    cartItem_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cart_item_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    cartItem_cant: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    }
);

Cart.belongsTo(UserModel)
Cart.hasMany(CartItems)
CartItems.belongsTo(Cart)
CartItems.belongsTo(ProductModel)

module.exports = {Cart, CartItems}
