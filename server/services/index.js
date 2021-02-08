const firebase = require('firebase')

const getContacts = () => {
    const userRef = firebase.database().ref('/PhoneBook/');
    return (new Promise((resolve, reject) => {
        userRef.on('value', function (snapshot) {
            const folders = snapshot.val()
            return folders
        })
    }))
}
getContacts()