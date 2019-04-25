const functions = require('firebase-functions');
const admin = require('firebase-admin');
const {programs} = require('./data.js');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp(functions.config().firebase);


exports.initDDBB = functions.https.onRequest((req,res) => {
    admin.database().ref('/programs').set({
        name: 'Program name',
        summary: 'Program summary'
    })
    res.send('Done')
})

exports.getPrograms = functions.https.onRequest((req,res) => {
    programs.forEach(element => {
        console.log(element)
    });
    return admin.database().ref('/programs').once('value').then( (snapshot) => {
        res.json(snapshot.val())
    })
}) 