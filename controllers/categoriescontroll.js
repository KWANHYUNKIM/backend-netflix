const connection = require ("../dbConfig")

const categoriescontroll = {
    
    postEvaluations : async (req,res) => {
        // javascript 구조분해할당 
        const sql = 'Select * from MainCategory ;'
        const categories = [];
        connection.query(sql,(error, rows) =>{
                if(error) throw error;
                   const idx_datalist = [];
                   
                   for(var i = 0 ; i < rows.length; i++ ){
                    idx_datalist.push(rows[i].idx);
                }
                //const contentIdx = rows;
                console.log(idx_datalist);
                const sql = 'Select * from category where categoryIdx in (?)'
                

                for(var i = 0; i < idx_datalist.length; i++){
                    connection.query(sql,[idx_datalist], (error, rows) =>{
                        if(error) throw error;
                        categories.push(rows);
                        res.send(rows);
                    })
                    
                    //console.log(contents);
                }
            })

            
    },

    getSeries : async (req,res) => { 
        const sql = 'Select * from SeriesCategory ;'
        const categories = [];
        connection.query(sql,(error, rows) =>{
                if(error) throw error;
                   const categoryIdx_datalist = [];
                   
                   for(var i = 0 ; i < rows.length; i++ ){
                    categoryIdx_datalist.push(rows[i].categoryIdx);
                }
                //const contentIdx = rows;
                console.log(categoryIdx_datalist);
                const sql = 'Select * from category where categoryIdx in (?)'
                

                for(var i = 0; i < categoryIdx_datalist.length; i++){
                    connection.query(sql,[categoryIdx_datalist], (error, rows) =>{
                        if(error) throw error;
                        categories.push(rows);
                        res.send(rows);
                    })
                    
                    //console.log(contents);
                }
            })
    },
    getMovies : async (req,res) => { 
        const sql = 'Select * from MovieCategory ;'
        const categories = [];
        connection.query(sql,(error, rows) =>{
                if(error) throw error;
                   const categoryIdx_datalist = [];
                   
                   for(var i = 0 ; i < rows.length; i++ ){
                    categoryIdx_datalist.push(rows[i].categoryIdx);
                }
                //const contentIdx = rows;
                console.log(categoryIdx_datalist);
                const sql = 'Select * from category where categoryIdx in (?)'
                

                for(var i = 0; i < categoryIdx_datalist.length; i++){
                    connection.query(sql,[categoryIdx_datalist], (error, rows) =>{
                        if(error) throw error;
                        categories.push(rows);
                        res.send(rows);
                    })
                    
                    //console.log(contents);
                }
            })
    
    }
}

module.exports = categoriescontroll;