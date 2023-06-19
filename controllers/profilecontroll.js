const connection = require ("../dbConfig")

const profilecontroll = {

    inserProfile: async (req,res) => {
        // javascript 구조분해할당 
        //console.log(req.query.keyword); 
        const check = req.query.keyword
        if(check  == 'profile')
        {
            const name = req.params.name;
            const image = req.body.image;
            const isKids = req.body.isKids;
            const presentLangIdx = req.body.presentLangIdx;
            const userIdx = req.params.userIdx;

            const sql = `INSERT INTO profile(name,image, isKids, userIdx, presentLangIdx) VALUES('${name}','${image}','${isKids}','${userIdx}','${presentLangIdx}');`
            connection.query(
                sql,[name,image,isKids,userIdx,presentLangIdx],(error, rows) =>{
                    if(error) throw error;
                    res.send(rows);
                
                }
            )
        }

        else
        {
            return res.send("");
        }
    },

    updateProfile: async (req, res) => {
        const check = req.query.keyword
        if (check == 'pwd')
        {
            const image = req.body.image;
            const isNext = req.body.isNext;
            const isPreview = req.body.isPreview;
            const presentLangIdx = req.body.presentLangIdx;
            const password = req.body.password;

            const name = req.params.name;
            const userIdx = req.params.userIdx;
            const sql = `UPDATE profile SET name = '${name}', image = '${image}', isNext = '${isNext}', password = '${password}', isPreview = '${isPreview}', presentLangIdx = '${presentLangIdx}' Where (userIdx = '${userIdx}' AND name = '${name}');`
            connection.query(
                sql,[name,image,isNext,isPreview,presentLangIdx,password,userIdx],(error, rows) =>{
                    if(error) throw error;
                    res.send(rows);
                }
            )
        }
        else
        {
            return res.send("");
        }
    },

    postProfile: async (req,res) =>{
        const profileIdx = req.params.profileldx;
        const password = req.body.password;
        const sql = `Update profile set password ='${password}' Where (profileIdx = '${profileIdx}');`
        connection.query(
            sql,[password,profileIdx],(error, rows) =>{
                if(error) throw error;
                res.send(rows);
            }
        )
    }
}

module.exports = profilecontroll