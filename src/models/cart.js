const { DataTypes } = require('sequelize')
const sequelize = require('./connection')
const productsModel = require("../models/producto");

const Cart = sequelize.define(
    'Cart',
    {
        cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
    'cartItems', {
        cartItem_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cart_id:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        cart_item_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cart_item_price:{
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue:0
        }

    }
)
Cart.hasMany(CartItems, { foreignKey: 'cart_id' });
CartItems.belongsTo(Cart,{ foreignKey: 'cart_id' })
productsModel.hasMany(CartItems, {foreignKey: 'cart_item_id'})
//CartItems.belongsTo(productsModel, { foreignKey: 'cart_item_id', targetKey: 'product_id' });


module.exports = {Cart, CartItems}
