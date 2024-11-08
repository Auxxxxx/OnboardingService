import React from 'react';
import {useState, useEffect, useCallback} from 'react'
import Pagination from './pagination';
import useAuth from '../hooks/useAuth.js';
import { URL } from '../constants.js';



const UsefulInfoList = (props) => {
    // получение данных с innerPages
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({content: []});
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    
    // const [userData, setUserData] = useState([]);
    const email = useAuth().email;


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


      const InfoList = ["Lorem ipsum dolor sit amet,", "consectetur adipiscing elit, sed do eius", "modo consequat. Duis a", "emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, conse",
      "bla bla bla", "rsfa4aeerrrrrrfsfrssssssss", "ewaaaaaaaaaaaaaaafeerrrrrrrrrrrrrrrrrr", "eawwwwwwwwwwwwewffew",
      "bla bla bla", "rsfa4aeerrrrrrfsfrssssssss", "ewaaaaaaaaaaaaaaafeerrrrrrrrrrrrrrrrrr", "eawwwwwwwwwwwwewffew", 
      "Князь Василий говорил всегда лениво, как актер говорит роль старой пиесы. Анна Павловна Шерер, напротив, несмотря на свои сорок лет, была преисполнена оживления и порывов. \
      Быть энтузиасткой сделалось ее общественным положением, и иногда, когда ей даже того не хотелось, она, чтобы не обмануть ожиданий людей, знавших ее, делалась энтузиасткой. Сдержанная улыбка, игравшая постоянно на лице Анны Павловны, хотя и не шла к ее отжившим чертам, выражала, как у избалованных детей, постоянное сознание своего милого недостатка, от которого она не хочет, не может и не находит нужным исправляться. \
      В середине разговора про политические действия Анна Павловна разгорячилась.", 
    ]


      useEffect(() => {
        // Выполнение запроса при монтировании компонента
        fetch(`http://${URL}/note/useful-info/${email}`)
          .then(response => response.json())
          .then(dataBody => {
             setData(dataBody.usefulInfo);
          })
          .catch(error => {
            if(error.status === 404) {console.log("У пользователя нет данных")}
            console.error('Ошибка получения данных:', error);
          });
          setInterval(() => {
            setIsLoading(false)
          }, 2000)
          
      // setUserData(InfoList);    
      }, []);

      useEffect(() => {setTotal(Math.ceil(data.content.length / ITEMS_PER_PAGE));
    console.log(data)
    }, [data])




    // useEffect(() =>{
    //   try{
    //    const responce = fetch('http://localhost:8080/note/useful-info');
    //    if(responce.ok){
    //        setData({data: responce.json().parse()});
    //        setTotal(Math.ceil(data['data'].length / ITEMS_PER_PAGE));
    //    } else{
    //     throw new Error("ошибка в получении данных в usefulinfoList");
    //    }
    //   } catch(error){
    //     console.log("ошибка в получении данных в usefulinfoList")
    //   }
    //   setTotal(Math.ceil(data['data'].length / ITEMS_PER_PAGE));
    //    setInterval(() => {
    //     setIsLoading(false)
    //    }, 2000)
    // }, [data])


    const noteList = data.content?.slice(startIndex, endIndex); 
    // console.log(noteList)
    // const noteListTest = props.list; 
    //каждый раз загружаются данные
    const viewNoteList = noteList.map((item, index) => 
    {if (typeof(item) == "string"){
       
       if (item?.length <= 120) {
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