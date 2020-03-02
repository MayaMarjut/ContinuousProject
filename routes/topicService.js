
const Pool = require('pg').Pool;
var conopts = {
    user: "postgres",
    password: "mansikkapirtelo",
    host: "localhost",
    database: "ContinuousData",
  }

const pool = new Pool(conopts);

const getTopics = (callback) => {
    pool.query('SELECT * FROM topic', (err,data) => {
        console.dir(err)
        console.dir(data)
        callback(data.rows);
    })
};
const createTopic = (newtopic, callback) => {
    const {title,description, timetomaster,timespent,source,startlearningdate,inprogress} = newtopic;
    pool.query('INSERT INTO topic (title, description, timetomaster,timespent,source,startlearningdate,inprogress) VALUES ($1, $2, $3,$4,$5,$6,$7)',
    [title, description,timetomaster,timespent,source,startlearningdate,inprogress], 
    (err,data) => {
        //console.dir(data.rowCount);
        if(err) {
            console.dir('Post: ', err);
            callback(0)
        }

        callback(data.rowCount);
    })
}
const deleteTopic = (title,callback) => {
    pool.query('DELETE FROM topic WHERE title=$1', [title], (err, result)=> {
        if (err) throw err;
        console.dir(result);
        callback(result.rowCount);
    })
}


module.exports = {getTopics, createTopic, deleteTopic};