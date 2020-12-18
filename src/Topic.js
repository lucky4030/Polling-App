import React,{useState} from 'react';
import db from './Firebase';
import "./styleSheets/topic.css"

function Topic() {
    const [input,setinput]=useState("");
    const sendMessage=(e)=>{
            e.preventDefault();
            
            db.collection('polls_list').add({
                topic:input,
                // timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                pos:0,
                neg:0,
                users_list:[],      

            })
            setinput("");

    }
    return (
        <div className="form">
            <form  className="inside_form">
                <input className="input"
                value={input}
                onChange={e=> setinput(e.target.value)}
                placeholder={"Enter the trending Poll"}/>
                <button className="button" type="submit" onClick={sendMessage}>Add Topic</button>
            
            </form>

        </div>
    )
}

export default Topic;
