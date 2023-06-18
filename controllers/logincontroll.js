const connection = require ("../dbConfig")

const logincontroll = {
    
    getLogin : async (req,res) => {
        // javascript 구조분해할당 
        const sql = 'Select * from user where email = ? AND password = ? ;'
        const email = req.params.email;
        const password = req.params.password;
        connection.query(sql,[email,password],(error, rows) =>{
                if(error) throw error;
                   res.send(rows);
            })

            
    }
}

module.exports = logincontroll;