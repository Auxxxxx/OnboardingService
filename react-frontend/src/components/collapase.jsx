import React from "react";
// import "./index.css";
// import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import {Form, FormTextarea} from "./form";
import Upload from './Upload'
import useAuth from '../hooks/useAuth.js';
import {URL} from "../constants.js"

const Meetingtext = (
  <>
  <h2>Add new note:</h2>
  <form method="post" action="HTTP//EXAMPLE">
    <input name="note" required maxlength={"511"}/>
    <input type="submit" value="Add"/>
  </form>
  </>
)

const Usefultext = (
  <>
  <h2>Add useful note:</h2>
  <form method="post" action="HTTP//EXAMPLE">
    <input name="note" required maxlength={"511"}/>
    <input type="submit" value="Add"/>
  </form>
  </>
)

const ContactText = (
  <>
  <h2>Add new contact:</h2>
  <form method="post" action="HTTP//EXAMPLE">
    <input name="note" required maxlength={"511"}/>
    <input type="submit" value="Add"/>
  </form>
  </>
)

// {
//   "id": 0,
//   "content": [
//     "note line 1",
//     "note line 2"
//   ],
//   "header": "Useful info",
//   "recipientEmail": "bill_edwards@gmail.com"
// }



const Collapas = () => {
  const email = useAuth();

  const handleMeetingNotes = () =>{
      const request = fetch(`http://${URL}/note/meeting-notes`, {
        method: 'PUT',
        body: JSON.stringify({id: 0, "content": [], header: "", recipientEmail: email})
      })
      .then(response => {
        if(!response.ok)
          throw new Error("error in sending data")        
      })
      .catch(err => {
        if(err.status === 404) {console.log("Такого пользоватлея нет")}
        else console.log("Ошибка в отправке данных")

      })

  }

  const handleUsefulNotes = () =>{
    const request = fetch(`http://${URL}/note/useful-info`, {
      method: 'PUT',
      body: JSON.stringify({id: 0, "content": [], header: "", recipientEmail: email})
    })
    .then(response => {
      if(!response.ok)
        throw new Error("error in sending data")        
    })
    .catch(err => {
      if(err.status === 404) {console.log("Такого пользоватлея нет")}
      else console.log("Ошибка в отправке данных")

    })
}


const handleContact = () =>{
  const request = fetch(`http://${URL}/note/contact-details`, {
    method: 'PUT',
    body: JSON.stringify({ "content": [], recipientEmail: email})
  })
  .then(response => {
    if(!response.ok)
      throw new Error("error in sending data")        
  })
  .catch(err => {
    if(err.status === 404) {console.log("Такого пользоватлея нет")}
    else console.log("Ошибка в отправке данных")

  })
}


  const items = [
    {
      key: "1",
      label: "Meeting Notes",
      children: <FormTextarea header="Add new note:" id={"1"} placeholder='Write your note' class="notes" name="meeting-notes"></FormTextarea>,
    },
    {
      key: "2",
      label: "Useful Notes",
      children: <FormTextarea header="Add useful note:" id={"2"} placeholder='Write your note' class="notes" name="useful-notes"></FormTextarea>,
    },
    {
      key: "3",
      label: "Contacts",
      children: <Form header="Add new contact:" id={"3"} placeholder="Add new contact" class="contact" ></Form>,
    },
    {
      key: "4",
      label: "Media",
      children: <><h2>Add media:</h2><Upload></Upload></>

    },
  ];
    return(<Collapse items={items} bordered={false} />)
};

export default Collapas;
