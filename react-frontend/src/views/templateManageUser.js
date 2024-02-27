import React, {useEffect, useState} from 'react';
import Collapas from '../components/collapase.jsx'
import '../App.css'
import '../index.css'
import { OmitProps } from 'antd/es/transfer/ListBody.js';
import {Typography } from 'antd';
import {useNavigate, useParams} from "react-router-dom"
import {URL} from "../constants.js"
import useUsers from '../hooks/useUsers.js';

//изначальное состояние приходит из БД, далее слушаем клики и меняем их с стайте
//type data{
//state: int,
//text: string    
//}
// 
// type
// {
//     "clients": [
//       {
//         "email": "bill_edwards@gmail.com",
//         "role": "CLIENT/MANAGER",
//         "fullName": "Bill Edwards",
//         "formAnswers": "[\"answer 1\",\"answer 2\",...]",
//         "onboardingStages": "[\"stage 1\",\"stage 2\",...]",
//         "activeStage": 1
//       }
//     ]
//   }


function UserWievTemplate(props){
     const [isChange, setChange] = useState(false);
     const [client, setClient] = useState({})
     const navigate = useNavigate();
     const email = useParams();
    //  console.log(email)
     const [step, setStep] = useState(1);
     const [text, setText] = useState();
     const {clients, setClients} = useUsers()


     useEffect(() =>{
        console.log(clients)
        setClient(clients.find(item => item.email === email))
     }, [])

    // useEffect(() =>{
    //     let request = fetch(`http://${URL}/client/get-data?email=${email}`)
    //     .then((response) => setData(response.json()))
    //     .catch(err => console.log(err));
       
    //     setData(JSON.parse(data))
    //     setStep(data.activeStage)
    //     setText(data.onboardingStages[data.activeStage-1])
    // }, 
    // [])


     //тестовые данные:
     let test = {}
     test.name = "Jasika"
     test.lastname = "Eliskaya"
     test.email = "vvv1987@gmail.com"
     test.step = "2";
     test.text = "second result";



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
                            <input className = "user-radio" type="radio" name="state" value={state} id={"state"+ state} disabled={!isChange? true:false} onChange={(e) => setStep(e.target.value)} checked={(state === step) ? "ckecked" : ""} />
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