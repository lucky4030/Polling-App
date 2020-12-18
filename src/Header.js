import React, { useEffect, useState } from "react";
import db from "./Firebase";
import "./styleSheets/Header.css";
import Topic from "./Topic";
import Topicslist from "./Topic_list";

const user = sessionStorage.getItem('userId');

const Judge = (props) => {
    
     if (props.topic.users_list.includes(user) === false) {
    return(
      <Topicslist
        topicc={props.topic.poll}
        pos={props.topic.pos}
        neg={props.topic.neg}
        id={props.topic.id}
        users_list={props.topic.users_list}
      />);
    
  }
  else{
      return null;

    
  }
};

function Header() {
  const [topicslist, settopicslist] = useState([]);

  // console.log(sessionStorage.getItem('userName'));
  // console.log(sessionStorage.getItem('userId'));
  // console.log(sessionStorage.getItem('userPhoto'));
  useEffect(() => {
    db.collection("polls_list").onSnapshot((snapshot) => {
      settopicslist(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          poll: doc.data().topic,
          pos: doc.data().pos,
          neg: doc.data().neg,
          users_list: doc.data().users_list,
        }))
      );
    });
  }, []);

  return (
    <>
      <div className="header">
        <div>
          <button>
            <h2>New</h2>
          </button>
        </div>

        <div>
          <button>
            <h2>Today</h2>
          </button>
        </div>
      </div>

      <div className="middle1">
        <Topic />
      </div>

      <div className="lower">
        {topicslist.map((topic) => (
            <Judge topic={topic} />            
        ))}
      </div>
    </>
  );
}

export default Header;
