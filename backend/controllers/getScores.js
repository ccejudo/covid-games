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

                db.collection('users').find( { room : req.body.room }).sort( { score: -1 } ).toArray(function(err, result) {
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

const updateScore = async (req, res) => {
    console.log('update')
    try {
        client.connect( (err) => {
            if (err) {
                console.log(err)
                res.send(err)
            }
            const db =  client.db('knowledge-rally')

            db.collection('users').updateOne({username: "chickenriceandbeans"}, { $set: { score: req.body.score }})
                .then( result => {
                    console.log(result)
                    res.json({questions: result})
                })
                .catch( error => {
                    res.send(error);
                })
        })

    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

module.exports = { getScores, updateScore }