import React from "react";
// import "./index.css";
// import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import {Form, FormTextarea} from "./form";
import Upload from './Upload'

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


const Collapas = () => {
  const items = [
    {
      key: "1",
      label: "Meeting Notes",
      children: <FormTextarea header="Add new note:" id={"1"} placeholder='Write your note' class="notes"></FormTextarea>,
    },
    {
      key: "2",
      label: "Useful Notes",
      children: <FormTextarea header="Add useful note:" id={"2"} placeholder='Write your note' class="notes"></FormTextarea>,
    },
    {
      key: "3",
      label: "Contacts",
      children: <Form header="Add new contact:" id={"3"} placeholder="Add new contact" class="contact"></Form>,
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
