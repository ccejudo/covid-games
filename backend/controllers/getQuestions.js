const MongoClient = require('mongodb').MongoClient
const client = new MongoClient(process.env.MONGODB_URL, { useUnifiedTopology: true })

const getQuestions = async (req, res) => {
    console.log('getQuestions')
    try {
        client.connect( (err) => {
            if (err) {
                console.log(err)
                res.send(err)
            }
            const db =  client.db('knowledge-rally')

            db.collection('questions').find().toArray(function(err, result) {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                console.log(result)
                res.json({questions: result})
            })
        })
       
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

module.exports = { getQuestions }