import React,{useState} from 'react';
import db from './Firebase';
import "./topic_list.css";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';
import { CardActions, CardContent, Grid } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import { useStateValue } from "./StateProvider";

function Topic_list(props) {
const [{canVote}, dispatch] = useStateValue(); 
const userId = sessionStorage.getItem('userId');
const Judge1 =()=>{
    if(props.vote==true)
    {
        return null
    }
    else
    {
        db.collection('polls_list').doc(props.id).update({
            pos:props.pos+1,
            users_list:[...props.users_list,userId]
            //users_list:props.users_list.push(user.email),
    })
    }
}
const Judge2 =()=>{
    if(props.vote==true)
    {
        return null
    }
    else
    {
        db.collection('polls_list').doc(props.id).update({
            neg:props.neg-1,
            users_list:[...props.users_list,userId]
            //users_list:props.users_list.push(user.email),
    })
    }
}
    return (
        <div className="topic_list">  
        <Card className="root" variant="outlined">
        <>
        <CardContent>
            <div className="middle">
                <p>{props.topicc}</p>  
            </div>
                <CardActions>
                <div className="left"> 
                <h4>{props.pos}</h4>
                <Fab size="small" color="primary" aria-label="add">
                <AddIcon onClick={Judge1}></AddIcon></Fab>
                </div>
                
            <div className="right">
            <h4>{props.neg}</h4>
            <Fab size="small" color="secondary" aria-label="remove">
            <RemoveIcon   onClick={Judge2}></RemoveIcon></Fab></div></CardActions>         
        </CardContent> 
        </>
        </Card>
        </div>
    )
}

export default Topic_list;
