import React, {useState} from 'react';
import {URL} from "../constants.js"
import useAuth from '../hooks/useAuth.js';
import {useParams} from 'react-router-dom'


export function Form(props) {
    //0 - данные не отправлялись, нет ничего, 1 - данные отправлены, успешно, 2 - данные отправлены, не успешно,
    //props.onClick - функция для отправки данных
    const [isSubmitted, setIsSubmitted] = useState(0);
    const email = useParams().username

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let form = e.target;
        // console.log(form);
        let formData = new FormData(form);
        //отладка
            // const formJson = Object.fromEntries(formData.entries());
            // setIsSubmitted(1);
            const d = { "content": [formData.get('content')], recipientEmail: email}
            
        //
        fetch(`http://${URL}/note/contact-details`, {
        method: 'PUT',
        body: JSON.stringify(d)

    })
      .then(response => {
        if(!response.ok){
          throw new Error("error in sending data") 
        }    
        setIsSubmitted(1);   

      })
      .catch(err => {
        setIsSubmitted(2);
        if(err.status === 404) {console.log("Такого пользователя нет")}
        else console.log("Ошибка в отправке данных")

      })
    }

    return(<>
        <h2>{props.header}</h2>
        <form method="post" onSubmit={handleSubmit}>
        <div>
          <input className={"user-inp-"+ props.class} type="text" name={"content"} required maxLength={"511"} placeholder={props.placeholder}/> 
          <input className="user-btn" type="submit" value="Add"/>
          {/* добавить textarea для заметок */}
          {(isSubmitted === 1) && <p className="form-scsf">Succesful</p>}
          {(isSubmitted === 2) && <p className="form-bad">Unsuccesful, send data again</p>}
          {}
        </div>
        </form>
        </>)

}


export function FormTextarea(props) {
    //0 - данные не отправлялись, нет ничего, 1 - данные отправлены, успешно, 2 - данные отправлены, не успешно
    const [isSubmitted, setIsSubmitted] = useState(0); 
    const email = useParams().username

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
            // console.log(JSON.parse(formJson).content)
            const d = {id: 0, "content": [formData.get('content')], header: formData.get('header'), recipientEmail: email}
            console.log(d)
            // setIsSubmitted(1);
        //
        if(props.name === "meeting-notes"){
          const request = fetch(`http://${URL}/note/meeting-notes`, {
                      method: 'PUT',
                      body: JSON.stringify(d)
                        })
                  .then(response => {
                    if(!response.ok){
                      setIsSubmitted(2);
                      throw new Error("error in sending data") 
                    }    
                    setIsSubmitted(1);   
                  })
                  .catch(err => {
                    setIsSubmitted(2);
                    if(err.status === 404) {console.log("Такого пользователя нет")}
                    else console.log("Ошибка в отправке данных")

                  })

    } if(props.name === "contact-notes"){
      delete d.header;
      delete d.id;
      
      fetch(`http://${URL}/note/contact-details`, {
        method: 'PUT',
        body: JSON.stringify(d)

    })
      .then(response => {
        if(!response.ok){
          setIsSubmitted(2);
          throw new Error("error in sending data") 
        }    
        setIsSubmitted(1);   

      })
      .catch(err => {
        setIsSubmitted(2);
        if(err.status === 404) {console.log("Такого пользователя нет")}
        else console.log("Ошибка в отправке данных")
      })
    }

    else{
         delete d.header;
         delete d.id;
        const request = fetch(`http://${URL}/note/useful-info`, {
              method: 'PUT',
              body: JSON.stringify(d)
            })
      .then(response => {
        if(!response.ok){
          throw new Error("error in sending data") 
        }    
        setIsSubmitted(1);   
      })
      .catch(err => {
        setIsSubmitted(2);
        if(err.status === 404) {console.log("Такого пользователя нет")}
        else console.log("Ошибка в отправке данных")

    })
    }

    }

    return(<>
        <h2>{props.header}</h2>
        <form method="post" onSubmit={handleSubmit}>
        <div>
          { (props.name === "meeting-notes") && <>
          <input className="user-header" type="text" name={"header"} placeholder="header"></input>
            <textarea className={"user-inp-"+ props.class} type="text" rows="4" name={"content"} 
            required maxLength={"511"} placeholder={props.placeholder}/> 
          </>
          }
          
          
          {(props.name === "useful-notes") &&
            <textarea className={"user-inp-"+ props.class} type="text" rows="4" 
            name={"content"} required maxLength={"511"} placeholder={props.placeholder}
            value = {props.usefulNote}
            onChange = {(e) => {props.setUsefulNote(e.target.value)}}
            /> 
          }

            {(props.name === "contact-notes") &&
            <textarea className={"user-inp-"+ props.class} type="text" rows="4" 
            name={"content"} required maxLength={"511"} placeholder={props.placeholder}
            value = {props.contact}
            onChange = {(e) => {props.setContact(e.target.value)}}
            /> 
          }

          <input className="user-btn" type="submit" value="Add"/>
          {/* добавить textarea для заметок */}
          {(isSubmitted === 1) && <p className="form-scsf">Succesful</p>}
          {(isSubmitted === 2) && <p className="form-bad">Unsuccesful, send data again</p>}
          {}
        </div>
        </form>
        </>)
}

