const con = require('../config/db_config.js')
// const sha = require('../config/encrypt')

exports.getMachine = async (input) => {
    let get = new Promise((resolve, reject) => {
        let sql = `SELECT * FROM machine_dashboard`;
        con.query(sql, function (err, result, fields) {
            if (err) {
                reject(err); 
            } else {
                resolve(result);
            }
        });
    });
    get.catch(error => {
        throw error
    });
    const output = await get.then(data=>data)
    return output
    
};