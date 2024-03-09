const db = require('../config/db');

class Items {
    constructor(){

    }

    async addOrder(orderDetails) {
        console.log(orderDetails)
    
        try {
            for (const order of orderDetails) {
                const sql = `UPDATE stock SET quantity = '${order.value}' WHERE item_name = '${order.name}'`;
                const result = await db.execute(sql);
                console.log(result); // Check the result from the database operation
                if (result && result[0] && result[0].affectedRows > 0) {
                    console.log('Rows updated successfully for item:', order.name);
                } else {
                    console.log('No rows matched the query for item:', order.name);
                }
            }

            return true; 
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }  
}

class Order {
    constructor(item, price, quantity, customerId) {
        this.item = item,
            this.price = price,
            this.quantity = quantity,
            this.customerId = customerId
    }

    async getItems() {

        const query = `SELECT * FROM stock`
        const res = await db.execute(query).then(data => data[0])
            .catch(err => err)

        return res

    }

}

module.exports = { Order , Items };