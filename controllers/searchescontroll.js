const connection = require ("../dbConfig")

const searchescontroll = {
    
    getSearches : async (req,res) => {
        // javascript 구조분해할당 
        const sql = 'Select * from Mostsearch;'
        const contents = [];
        connection.query(sql,(error, rows) =>{
                if(error) throw error;
                    var contentIdx_datalist = [];
                    
                    for(var i = 0 ; i < rows.length; i++ ){
                        contentIdx_datalist.push(rows[i].contentIdx);
                    }
                    console.log(contentIdx_datalist);
                    const sql = 'Select contentIdx, title, thumbnail from content where contentIdx in (?)';
                    
                    for(var i = 0; i < contentIdx_datalist.length; i++){
                        connection.query(sql,[contentIdx_datalist], (error, rows) =>{
                            if(error) throw error;
                            contents.push(rows);
                            res.send(rows);
                    })    
               }
              
        })
    }
}

module.exports = searchescontroll;