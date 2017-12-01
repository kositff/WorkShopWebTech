const express = require('express')

const router = express.Router()
function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

var contactList = [
    {id: 0, name: 'Ned' ,surname: 'Stark', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Winter is coming.'},
    {id: 1, name: 'Theon' ,surname: 'Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
    {id: 2, name: 'Samwell',surname: 'Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Loyal brother of the watch.'},
    {id: 3, name: 'Jon', surname: 'Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Knows nothing.'},
    {id: 4, name: 'Arya', surname: 'Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Has a list of names.'},
    {id: 5, name: 'Jora', surname: 'Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Lost in the friend-zone.'},
    {id: 6, name: 'Tyrion', surname: 'Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Currently drunk.'},
    {id: 7, name: 'Stannis', surname: 'Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
    {id: 8, name: 'Hodor',surname: '', email: 'hodor@hodor.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
    {id: 9, name: 'Margaery', surname: 'Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Keeper of kings.'},
    {id: 10, name: 'Brienne', surname: 'of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'},
    {id: 11, name: 'Petyr', surname:  'Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.'},
  ];

router.get('/contacts', (req, res) => {
    res.json(contactList)
})
router.get('/contacts?name=', (req, res) => {
    let name = req.query.name
    let text = []
    text.push("Fail")
        for (let i=0; i<contactList.length; i++) {
            if(name == contactList[i].name){
                res.json(contactList[i])
            }
            else{
                res.json(text)
            }
}
})


router.get('/contacts/:id', (req, res) => {
    let id = req.params.id
    for(let i=0; i<contactList.length;i++){
        if(id == contactList[i].id)
            res.json(contactList[i])
    }
    })

router.delete('/contacts/:id', (req, res) =>{
    let id = req.params.id
    res.json(contactList[id])
    for(var i=0; i<contactList.length; i++) {
        if(contactList[i].id == id)
            contactList.splice(i, 1)
    }
})

router.post('/contact', (req,res) => {
    let list = req.body
    let a = []
    a.push("fail.")
    if(!isEmptyOrSpaces(list.name) && (!isEmptyOrSpaces(list.email))){
        contactList.push(list)
        res.json(contactList)
    }
    else{
        res.json(a)
    }
    
    
})

router.put('/contact/:id', (req,res) => {
    let id = req.params.id
    let list  = req.body
    for(var i=0; i<contactList.length; i++) {
        if(contactList[i].id == id){
            contactList[i].name = list.name
            contactList[i].surname = list.surname
            contactList[i].email = list.email
            contactList[i].phone = list.phone
            contactList[i].url = list.url
            contactList[i].notes = list.notes
            res.json(contactList[i])
            break
        }
    }
    
    
})

module.exports = router
