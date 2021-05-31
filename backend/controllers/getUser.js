const MongoClient = require('mongodb').MongoClient
const client = new MongoClient(process.env.MONGODB_URL, { useUnifiedTopology: true })

const getUser = async (req, res) => {
    console.log('getUser')
    try {
        client.connect( (err) => {
            if (err) {
                console.log(err)
                res.send(err)
            }
            const db =  client.db('knowledge-rally')
            console.log(req.body)

            db.collection('users').find({ username : req.body.username }).toArray(function(err, result) {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                console.log(result)
                res.json({user: result})
            })
        })
       
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

module.exports = { getUser } 