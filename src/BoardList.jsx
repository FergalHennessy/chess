import React from 'react'
import {db} from './firebase'



async function BoardList(){
    const reference = db.collection('games')
    const snapshot = await reference.where('timestamp', '==', true)

    /*const now = Date.now()
    const cutoff = now - 2 * 60 * 60 * 1000
    const old = reference.orderByChild('timestamp')
    const listener = old.on('child_added', function(snapshot){
        snapshot.reference.remove()
    })*/


    if(snapshot.empty){
        console.log('No matching documents')
    }
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data())
    })
    return(
        "should not get here"

    )
}



export default BoardList