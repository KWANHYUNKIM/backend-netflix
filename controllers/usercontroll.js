const connection = require ("../dbConfig")

const usercontroll = {
        
    insertUser : async (req,res) => {
        // javascript 구조분해할당 
        const {email,password, membershipidx ,card} = req.body;
       
        const card_sql = `INSERT INTO card(cardNumber,name,yymm,birthYear,birthMonth,birthDay,phone) VALUES ('${card.cardNumber}','${card.name}','${card.yymm}','${card.birthYear}','${card.birthMonth}','${card.birthDay}','${card.phone}')`
        connection.query(card_sql,[card] , (error, rows) =>{
            if(error) throw error;
            const cardIdx = rows.insertId;
            
            const sql = `INSERT INTO user(email, password, membershipIdx, cardIdx)
            VALUES('${email}','${password}', '${membershipidx}','${cardIdx}');`

            connection.query(sql,[email,password,membershipidx, cardIdx], (error,rows) =>{
                if(error) throw error;
                res.send(rows);
            });
           
            
        });
        
    }
}
module.exports = usercontroll