const MongoClient = require('mongodb').MongoClient
const client = new MongoClient(process.env.MONGODB_URL, { useUnifiedTopology: true })

const getScores = async (req, res) => {
    console.log('getScores')

    try {
        if( req.method == 'GET'){
            client.connect( (err) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                const db =  client.db('knowledge-rally')

                db.collection('users').find().sort( { score: -1 } ).toArray(function(err, result) {
                    if (err) {
                        console.log(err)
                        res.send(err)
                    }
                    console.log(result)
                    res.json({users: result})
                })
            })
        } else {
            client.connect( (err) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                const db =  client.db('knowledge-rally')

                db.collection('users').find().sort( { score: -1 } ).toArray(function(err, result) {
                    if (err) {
                        console.log(err)
                        res.send(err)
                    }
                    console.log(result)
                    res.json({users: result})
                })
            })
        }
       
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

module.exports = { getScores }