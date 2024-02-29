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

// clients - массив всех клиентов из БД
// client - объект клиент, email которого указан в поисковой строчке


function UserWievTemplate(props){
     const [isChange, setChange] = useState(false);
     const [client, setClient] = useState({})
     const navigate = useNavigate();
     const email = useParams().username;
    //  console.log(email)
     const [step, setStep] = useState();
     const [initialState, setIntialState] = useState() 

     const [text, setText] = useState();
     const [initialText, setInitialText] = useState();

     const [temp, setTemp] = useState(['1 stage', '2 stage', '3 stage'])
     const [tempStatus, setTempStatus] = useState()

     const {clients} = useUsers()
   
    //  console.log('rerendering')


     useEffect(() =>{
        console.log("Clients", clients)
        console.log("email", email)
        setClient(clients.find(item => item.email === email))
        console.log('initial rendering')
     }, [])

     useEffect(() =>{
        console.log("client", client)
        setIntialState(client.activeStage)
     }, [client])

     useEffect(() =>{
        setStep(initialState)
        console.log("typeof:", typeof(initialState))
        // setTemp(client.onboardingStages)
        // console.log("temp", temp)
        // console.log(tempStatus)
        // setInitialText(temp)
    }, [client, initialState])


    // useEffect(()=> {
    //  if(temp && temp.lenght > 0)
    //    setTempStatus(temp[0])

    // }, [temp])

    // useEffect(() =>{
    //     setText(initialText)
    // }, [initialText])

     useEffect(() => {
        console.log("Step value changed:", step);
        console.log("Client:", client)
        console.log("tempStatus:", tempStatus)

      }, [step, client, tempStatus]);




     //тестовые данные:
     let test = {}
     test.name = "Jasika"
     test.lastname = "Eliskaya"
     test.email = "vvv1987@gmail.com"
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
        let formData = new FormData(document.getElementById('form'))
        // setStep(formData.get('state'))
        console.log("В handleSubmit: ", step)
        const data = client
        data['activeStage'] = +step;
        data.onboardingStages[step-1] = formData.get('status')

        console.log("в отправке данных", data)

        let responce = fetch(`http://${URL}/client`,{
            method: "POST",
            body: JSON.stringify(data),
        })
        setChange((prev) => !prev);
     }

     console.log("В теле компонента:", step)

    return(<main className = "user-main">
        <h1 className = "user-h1">{(client?.fullName !== " ")? client?.fullName : "Page User"}</h1>
        {/* <h2 className = "user-h2">{test.email}</h2> */}
        <Typography.Text className="user-copyable" copyable={true}>{client?.email}</Typography.Text>
        <div className="user-wrapper">
        <div className = "wrapper-progress">
        <h2>Chosen step: {step}</h2>
        {/* <p class = "user-p">{test.text}</p> */}
        <button className="user-btn-back" onClick={handleBack}></button>
        <form onSubmit={!isChange ? handleClick : handleSubmit} id="form">
                <fieldset type="select">
                    <label>Client progress</label>
                    {[...Array(3)].map((_, index) => {
                    const state = index + 1;
                    // console.log(state, step)
                    return (
                        <div key={state}>
                            <input className = "user-radio" 
                            type="radio" 
                            name="state" 
                            value={state} 
                            id={"state"+ state}
                             disabled={!isChange? true:false}
                             onChange={(e) => {setStep(e.target.value)}} 
                            //  типы данных state и stage
                             checked={!isChange? ((state == step) ? "ckecked" : "") : undefined} 
                             />

                            <label htmlFor={"state"+ state}>State {state}</label>
                        </div>
                    )
            })}
             {/* checked={state === test.state} */}
            {/* value={!isChange? test.text : ""} */}
                </fieldset>
                <input className="user-inp" type="text" name="status" 
                disabled={!isChange? true:false}  
                onChange={(e) => setText(e.target.value)}
                // value={tempStatus}
                />
                <button className="user-btn" onClick={!isChange ? handleClick : handleSubmit}>
                    {!isChange ?"Change progress":"Save"}
                </button>
        </form>
        </div>
        <Collapas></Collapas>
        </div>
    </main>)
}

export default UserWievTemplate;