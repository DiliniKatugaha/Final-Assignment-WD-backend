const db =require('../config/db')
class Admin {
        constructor(username,password,email){
            this.username=username,
            this.password= password,
            this.email=email

        }

        async getUsers(){

            const sql = `SELECT ac.user_id, u.user_name,u.email, ac.delivery_module, ac.stock_module, ac.order_module, ac.sells_module,ac.production_module, ac.report_module
                        FROM
                        user u
                        INNER JOIN access_controll ac 
                        ON  u.id = ac.user_id
                       `

            const res = db.execute(sql).then(data=> data[0]).catch(err=> err)
            return res

        }

        async setAccess(data){

                console.log(data)
            const sql = `UPDATE access_controll
            SET delivery_module = "${data.delivery_module}"
                                    , stock_module= "${data.stock_module}"
                                    , order_module= "${data.order}"
                                    ,sells_module=   "${data.sells_module}"
                                    ,production_module= "${data.production_module}"
                                    ,report_module= "${data. report_module}"
            WHERE user_id = ${data.user_id};`

            const res = await db.execute(sql).then((data)=>{
                    return data
            }).catch((err)=>{
                return err 
            })

            return res

        }


}
module.exports= {Admin}