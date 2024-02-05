import React, {useState} from 'react';

//type {
//  email: string,
//  image: "url"
//}

function ButtonState(props){
    const [isOpen, setIsOpen] = useState(false);
    const [Number, setNumber] = useState(1);          //прикрутить номер этапа к каждому элементу
    // const [colored, setColored] = useState("");

    if(isOpen){

    }

    return(
        <>
        <button className= {"prf-btn" + ((Number === 1) ? "-colored " : " ") + "prf-btn-1"}  onClick = {() => { if(Number === 1) setIsOpen((prev) => !prev)} } ></button>
        <button className={"prf-btn" + ((Number === 2) ? "-colored " : " ") + "prf-btn-2"} onClick = {() => { if(Number === 2) setIsOpen((prev) => !prev)}} ></button>
        <button className={"prf-btn" +  ((Number === 3) ? "-colored " : " ") + "prf-btn-3"} onClick = {() => { if(Number === 3) setIsOpen((prev) => !prev)}} ></button>
        { isOpen && 
        <p className = "prf-note">{props.text}</p>
        }
        </>
        )


}

export default ButtonState;