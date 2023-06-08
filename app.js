const express = require('express');
const app = express();
const uuidAPIkey = require('uuid-apikey');

//console.log(uuidAPIkey.create());

const sever = app.listen(3001, () => {
    console.log('Start Sever: localhost:3001');
});

const key = {
    
    apikey: 'BCSE8B4-KDS4JAV-JKZMS6K-XVJ5QN7',
    uuid: '5b32e42c-9b72-492b-94ff-4c9aeee45bd4'
      
}

app.get('/api/users/:apikey/:type', async (req, res) =>{
    let {
        apikey,
        type
    } = req.params;
    
    if(!uuidAPIkey.isAPIKey(apikey) || !uuidAPIkey.check(apikey, key.uuid)) {
        res.send('apikey is not valid.');
    }else{
        if (type == 'seoul')
        {
            console.log(type);
            res.send('ok.');
        }
    }

    
});

