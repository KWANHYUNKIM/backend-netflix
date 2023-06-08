const connection = require ("../dbConfig")

const movieCtrl = {
    
    getMovies : async (req,res) => {
        connection.query('Select * from movie', (error, rows) =>{
            if(error) throw error;
            res.send(rows);
        } )
    },  
    insertMovie : async (req,res) => {
        // javascript 구조분해할당 
        const {id,title,person,genre,runningtime} = req.body;
        const sql = `INSERT INTO movie(movie_id,title,person,genre,runningtime)
                     VALUES(${id},'${title}','${person}','${genre}',${runningtime});`

        connection.query(
            sql,(error, rows) =>{
                if(error) throw error;
                res.send(rows);
            }
        )
    }
}

module.exports = movieCtrl