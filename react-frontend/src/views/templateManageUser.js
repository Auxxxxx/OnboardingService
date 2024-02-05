import React, {useEffect, useState} from 'react';
import Collapas from '../components/collapase.jsx'
import '../App.css'
import '../index.css'
import { OmitProps } from 'antd/es/transfer/ListBody.js';
import {Typography } from 'antd';
import {useNavigate, useParams} from "react-router-dom"

//изначальное состояние приходит из БД, далее слушаем клики и меняем их с стайте
//type data{
//state: int,
//text: string    
//}

function UserWievTemplate(props){
     const [isChange, setChange] = useState(false);
     const navigate = useNavigate();
     const email = useParams();
     const [data, setData] = useState({steps: "", name: "", lastName: ""});

    //для получения данных при первом рендеринге
    // useEffect(() =>{
    //     let request = fetch(`EXAMPLE/${email}`)
    //     .then((reponse) => responce.json())
    //     .catch(err => console.log(err));
    //     .then((backData) => setData(backData)); //!!!изм. записать данные в нужные поля
    // }, 
    // [])


     //тестовые данные:
     let test = {}
     test.name = "Jasika"
     test.lastname = "Eliskaya"
     test.email = "vvv1987@gmail.com"
     test.step = "2";
     test.text = "second result";


     const [step, setStep] = useState(test.step);
     const [text, setText] = useState(test.text);

     const handleClick = (e) => {
        e.preventDefault();
        setChange((prev) => !prev);
     }

     const handleBack = () => {
        navigate('/admin');
    }
     const handleSubmit = (e) =>{
        e.preventDefault();
        let form = e.target;
        console.log(e.target)


        let responce = fetch("HTTP://WEBSERVER.com/",{
            method: "POST",
            body: {[step]: text},
        })
        //get Data from fieldset
        console.log({[step]:text});
        setChange((prev) => !prev);
     }


    return(<main className = "user-main">
        <h1 className = "user-h1">{test.name +" " + test.lastname}</h1>
        {/* <h2 className = "user-h2">{test.email}</h2> */}
        <Typography.Text className="user-copyable" copyable={true}>{test.email}</Typography.Text>
        <div className="user-wrapper">
        <div className = "wrapper-progress">
        <h2>Chosen step: {test.state}</h2>
        {/* <p class = "user-p">{test.text}</p> */}
        <button className="user-btn-back" onClick={handleBack}></button>
        <form onSubmit={!isChange ? handleClick : handleSubmit}>
                <fieldset type="select">
                    <label>Client progress</label>
                    {[...Array(3)].map((_, index) => {
                    const state = index + 1;
                    return (
                        <div key={state}>
                            <input className = "user-radio" type="radio" name="state" value={state} id={"state"+ state} disabled={!isChange? true:false} onChange={(e) => setStep(e.target.value)} />
                            <label htmlFor={"state"+ state}>State {state}</label>
                        </div>
                    )
            })}
             {/* checked={state === test.state} */}
            {/* value={!isChange? test.text : ""} */}
                </fieldset>
            <input className="user-inp" type="text" name="step" disabled={!isChange? true:false}  onChange={(e) => setText(e.target.value)}/>
            <button className="user-btn" onClick={!isChange ? handleClick : handleSubmit}>{!isChange ?"Change progress":"Save"}</button>
        </form>
        </div>
        <Collapas></Collapas>
        </div>
    </main>)
}

export default UserWievTemplate;