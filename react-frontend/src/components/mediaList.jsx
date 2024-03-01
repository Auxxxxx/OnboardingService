import React from 'react';
import {useState, useEffect, useCallback} from 'react'
import Pagination from './pagination';
import {URL} from '../constants'
import useAuth from '../hooks/useAuth'

// 
// data{
// "imageUrls": []
//
//
//}
//

const MediaList = (props) => {
    // получение данных с innerPages
    const [isLoading, setIsLoading] = useState(true);
    const email = useAuth().email;
    console.log("email:", email)
    
    const [data, setData] = useState({data:  ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    , "https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    , "http://joomlavogue.com/web_designer_developer/wp-content/uploads/2013/08/dt-045.jpg"
    , "https://i.blogs.es/33f737/app_store/1366_2000.jpeg"
    , "https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    , "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1851&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   ]
 });
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    
    const ITEMS_PER_PAGE = 6;

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


    const noteListTest = props.list; 
    const noteList =  data.data.slice(startIndex, endIndex);

    const viewNoteList = noteList.map((item, index) => 
    {if (
        typeof(item) == "string" &&
        item.length <= 255){
        return <li className = {props.class + "-li"} key = {index}>
        <img className = {props.class + "-img"} src = {item} alt = "image source"></img>
      </li>
      }
    }
    ); 

    useEffect(() =>{

        async function getData(){
          try{
            const responce = await fetch(`http://${URL}/image/media-assets/${email}`, {
              method: "GET",
              // headers: {
                // 'content-type': '',
              // }
            });
            if (responce.status === 400){
                console.log("Bad Request. No client specified")
            }
            else if(responce.ok){
             const dataJson = await responce.json();
              setData({data: dataJson.imageUrls});
              setTotal(Math.ceil(data['data'].length / ITEMS_PER_PAGE));
            } else{
             throw new Error("ошибка в получении данных в mediaList");
            }
           } catch(error){
             console.log("ошибка в получении данных в mediaList")
           }
            setTotal(Math.ceil(data['data'].length / ITEMS_PER_PAGE));
            setInterval(() => {
             setIsLoading(false)
            }, 2000)
        }

        getData()

        // try{
        //  const responce = fetch(`http://${URL}/media/${email}`);
        //  if(responce.ok){
        //   const json = responce.json();
        //    setData({data: responce.json().parse()});
        //    setTotal(Math.ceil(data['data'].length / ITEMS_PER_PAGE));
        //  } else{
        //   throw new Error("ошибка в получении данных в mediaList");
        //  }
        // } catch(error){
        //   console.log("ошибка в получении данных в mediaList")
        // }
        //  setTotal(Math.ceil(data['data'].length / ITEMS_PER_PAGE));
        //  setInterval(() => {
        //   setIsLoading(false)
        //  }, 2000)
      }, [data])
    
    if(isLoading) 
        return <><p className = "p-loading">Loading...</p></>

    return(<>
    <ul className="media-ul">
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

export default MediaList;