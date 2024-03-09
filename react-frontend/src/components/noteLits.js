import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useNotes from "../hooks/useNotes";
import Pagination from './pagination';
import { URL } from "../constants";
import useAuth from "../hooks/useAuth";

const NotesList = (props) => {
    // получение данных с innerPages
    const [isLoading, setIsLoading] = useState(true);
    const {data, setData} = useNotes();
    const email = useAuth().email;
    console.log(email)
    // let data = {}
    const navigate = useNavigate();
    // const noteList = props.list;  

    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
//пагинация 
    const ITEMS_PER_PAGE = 7;

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const handleNextPageClick = useCallback(() => {
        const current = page;
        const next = current + 1;
        const totl = data ? total : current;
    
        setPage(next <= totl ? next : current);
      }, [page, data, total]);
    
    const handlePrevPageClick = useCallback(() => {
        const current = page;
        const prev = current - 1;
    
        setPage(prev > 0 ? prev : current);
      }, [page]);


// 


    
    useEffect(() =>{
    const request = fetch(`http://${URL}/note/meeting-notes/${email}`)
      .then((response) => {
        response.json().then(function(result){
          setData(result.meetingNotes)
        }
        )
      }) 
      .catch(err => console.log(err))


    setInterval(() =>{
      setIsLoading(false)}
      , 2000)
      }, [])

      useEffect(() => {setTotal(Math.ceil(data?.length / ITEMS_PER_PAGE));
      console.log(data)
      }, [data])
    
    if(isLoading) 
    return <><p className = "p-loading">Loading...</p></>
    
    // const handleLi = (id) => {
    //   //window.location.assign('/notes/1');
    //   console.log("id" + id)
    //   navigate(`/notes/${`${id}`}`);
    // }
   
    console.log("data:", data)

    const noteList = data?.slice(startIndex, endIndex); 

    const viewNoteList = noteList?.map((item, index) => 
    { 
      let id = item.id
      console.log(id)
      let url = `/notes/${`${id}`}`
      if (
        typeof(item) == "string" &&
        item.length <= 255){
       return <li className = {props.class + "-li"} key = {index}
        onClick = {() => {navigate(url); console.log(url); }}>
        <img className = {props.class + "-img"} src = "/meetingNotes.svg" 
        alt = "notes"></img>
        {item.name}     
        {item.date}
     </li>
    } else {
      return (
        <li
          className={props.class + "-li-zip"}
          key={index}
          onClick={() => navigate(url)}
        >
          <img
            className={props.class + "-img"}
            src="/onboarding.svg"
            alt="notes"
          ></img>
          <span className="notes-name">{(item.header.length <= 128 )? item.header : item.header.slice(0, 100)+"..."}</span>
          <span className="notes-date">{item.date}</span>
        </li>
      );
    }
  });

  return <>
  <ul className="notes-ul">{viewNoteList}</ul>
  {data && (
        <Pagination
          onNextPageClick={handleNextPageClick}
          onPrevPageClick={handlePrevPageClick}
          disable={{
            left: page === 1,
            right: page === total,
          }}
          nav={{ current: page, total: total }}
        />
      )}
  </>
  ;
};

export default NotesList;
