const connection = require ("../dbConfig")

const profilecontroll = {

    inserProfile: async (req,res) => {
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
}

module.exports = profilecontroll