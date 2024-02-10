import React from 'react';
import {useState, useEffect, useCallback} from 'react'
import Pagination from './pagination';


const UsefulInfoList = (props) => {
    // получение данных с innerPages
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]});
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    
    const ITEMS_PER_PAGE = 10;

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



    useEffect(() =>{
      try{
       const responce = fetch('http://localhost:8080/note/useful-info');
       if(responce.ok){
           setData({data: responce.json().parse()});
           setTotal(Math.ceil(data['data'].length / ITEMS_PER_PAGE));
       } else{
        throw new Error("ошибка в получении данных в usefulinfoList");
       }
      } catch(error){
        console.log("ошибка в получении данных в usefulinfoList")
      }
      setTotal(Math.ceil(data['data'].length / ITEMS_PER_PAGE));
       setInterval(() => {
        setIsLoading(false)
       }, 2000)
    }, [data])

    const noteList = data.data.slice(startIndex, endIndex); 
    console.log(noteList)
    const noteListTest = props.list; 
    //каждый раз загружаются данные
    const viewNoteList = noteList.map((item, index) => 
    {if (typeof(item) == "string"){
       
       if (item.length <= 120) {
        return <li className = {props.class + "-li"} key = {index}>
        <p>{item}</p>
      </li>
      } else  {
        return <li className = {props.class + "-li"} key = {index}>
        <p>{item.substring(0, 120) + "..."}</p>
      </li>
      }
    }
    else {
      return <li className = {props.class + "-li"} key = {index}>
      <p>{item}</p>
      </li>
    }

}
    ); 

   if(isLoading) 
   return <><p className = "p-loading">Loading...</p></>

    return(<>
        <ul className="useful-ul">
        {viewNoteList}
    </ul>
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

    );
}

export default UsefulInfoList;