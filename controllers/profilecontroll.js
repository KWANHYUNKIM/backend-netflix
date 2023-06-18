const connection = require ("../dbConfig")

const profilecontroll = {

    inserProfile: async (req,res) => {
        // javascript 구조분해할당 
        console.log(req.query);
        if(req.query == 'profile'){
        const name = req.body.name;
        const image = req.body.image;
        const isKids = req.body.isKids;
        const presentLangIdx = req.body.presentLangIdx;
        const userIdx = req.params.userIdx;
        const sql = `INSERT INTO profile(name,image, isKids, userIdx, presentLangIdx)
                     VALUES(name = ?, image = ?, isKids = ?, userIdx = ? ,presentLangIdx = ? );`
        connection.query(
            sql,[name,image,isKids,userIdx,presentLangIdx],(error, rows) =>{
                if(error) throw error;
                res.send(rows);
                
            }
        )
        }
        else 
            return 0;
    },
}

module.exports = profilecontroll