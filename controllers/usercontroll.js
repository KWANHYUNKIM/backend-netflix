const connection = require ("../dbConfig")

const usercontroll = {
    
    insertUser : async (req,res) => {
        // javascript 구조분해할당 
        const {email,password, membershipidx,cardIdx} = req.body;
        const sql = `INSERT INTO user(email,password, membershipIdx, cardIdx)
                     VALUES('${email}','${password}', '${membershipidx}','${cardIdx}');`

        connection.query(
            sql,(error, rows) =>{
                if(error) throw error;
                res.send(rows);
            }
        )
    },
    // GET : membershipIdx

    getMembership :  async (req,res) => {
        // javascript 구조분해할당 
        const sql = 'Select * from membership where membershipIdx = ?;'
        const membershipIdx = req.params.membershipIdx;
        connection.query(sql,membershipIdx,(error, rows) =>{
                if(error) throw error;
                
                res.send(rows)
            }
               
        )
    },
    // INSERT : THE DETAILS OF CARD 
    // GET : CARDIdx
    insertCard : async (req,res) => {
        // javascript 구조분해할당 
        const {cardNumber,name,yymm,birthYear,birthMonth,birthDay,phone} = req.body;
        const sql = `INSERT INTO user(cardNumber,name,yymm,birthYear,birthMonth,birthDay,phone)
                     VALUES('${cardNumber}','${name}','${yymm}','${birthYear}',
                     '${birthMonth}','${birthDay}','${phone}');`

        connection.query(
            sql,(error, rows) =>{
                if(error) throw error;
                res.send(rows);
            }
        )
    }
}

module.exports = usercontroll