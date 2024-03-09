const db =require('../config/db')
class Delivery {
        constructor(){

        }
    async addStaff (staffDetails){
    
        const sql = `INSERT INTO delivery_staff 
                    (id,name,contact,email) VALUES
                    (${staffDetails.nic},
                    '${staffDetails.name}',
                    '${staffDetails.contact_number}',
                    '${staffDetails.email}')`

        db.execute(sql).then((data)=>{
                            console.log(data[0])
                            return data
                        })
                       .catch((err)=>{
                            console.log(err.message)
                            return err
                       })
    }
}
class Staff {
    constructor(id, name, contact, email) {
            this.id = id,
            this.name = name,
            this.contact = contact,
            this.email = email
    }
    async getStaff() {

        const query = `SELECT * FROM delivery_staff`
        const res = await db.execute(query).then(data => data[0])
            .catch(err => err)

        return res
    }
}

class Details {
    constructor(){

    }

    async addDetails(deliveryDetails) {
        console.log(deliveryDetails);

        const orderDetails = deliveryDetails.orderDetails;

        for (const orderDetail of orderDetails) {
            const { itemName, quantity, unitPrice, total } = orderDetail;

    const sql = `INSERT INTO delivery_details 
                (item_name,quantity,unit_price,total_amount,customer_name,address,city,zipcode,contact_number,payment_method) VALUES
                ('${itemName}',
                '${quantity}',
                '${unitPrice}',
                '${total}',
                '${deliveryDetails.deliveryInfo.name}',
                '${deliveryDetails.deliveryInfo.addrsLine1}',
                '${deliveryDetails.deliveryInfo.city}',
                '${deliveryDetails.deliveryInfo.zip}',
                '${deliveryDetails.deliveryInfo.contact}',
                '${deliveryDetails.deliveryInfo.paymentOption}')`

    db.execute(sql).then((data)=>{
                        console.log(data[0])
                        return data
                    })
                   .catch((err)=>{
                        console.log(err.message)
                        return err
                   })
}}}

class Items {
    async getDetails() {
        try {
            const query1 = `SELECT * FROM delivery_details`;
            const query2 = `SELECT name FROM delivery_staff`;
    
            const [detailsResult, staffResult] = await Promise.all([
                db.execute(query1),
                db.execute(query2)
            ]);
    
            return { details: detailsResult[0], staff: staffResult[0] };
        } catch (error) {
            console.error("Error fetching delivery details:", error);
            return null; 
        }
    }


}

module.exports= {Delivery , Staff , Details ,Items}