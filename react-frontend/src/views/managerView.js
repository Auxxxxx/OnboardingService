import React, {useEffect, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Divider, List, Skeleton } from 'antd';
import Collapas from '../components/collapase';
//type data: {data: []}
import ManageL from '../components/ListScroll.js';
import InnerPage from '../components/innerpages.jsx';
import {URL} from "../constants.js"

const ManagerPage = () => {
  //  const [data, setData] = useState({data: [{name: "Jonh Adamster", email: "email@gmail.com", lastName: "Smith"},
  // {name: "Edd Sheroon", email: "email@gmail.com", lastName: "Smith"}, 
  //{name: "Lila Gamlet", email: "email@gmail.com", lastName: "Smith"}, 
  //{name:"Mister Adams", email: "email@gmail.com", lastName: "Smith"}]});

  //  const [isLoading, setIsLoading] = useState(false);

  //  useEffect(() =>{
  //   try{
  //    const responce = fetch(`http://${URL}/note/useful-info`);
  //    if(responce.ok){
  //       //  setData({data: responce.json().parse()});
  //    } else{
  //     throw new Error("ошибка в получении данных в ManagerPage");
  //    }
  //   } catch(error){
  //     console.log("ошибка в получении данных в ManagerPage")
  //   }
  // }, [])


  // console.log(<Collapas></Collapas>)
    // const viewList = data.data.map(((index, elem) =>{
    //    return (<li key = {index} className="client-list" onClick = {() => console.log("ЗАГЛУШКА")}>
    //     {elem}
    //    </li>)

    // }))

    return(
    <main className="manager-main">
    <h1 className="manager-h1">Manage View</h1>
    {/* <Collapas></Collapas> */}
    <ManageL></ManageL>
    </main>
    
    )
}

export default ManagerPage;