import React, {useState} from 'react';
import './buttons-states.css'

//type {
//  email: string,
//  image: "url"
//}

function ButtonState(props){
    //props.state 
    const [isOpen, setIsOpen] = useState(false);
    const [Number, setNumber] = useState(1);          //прикрутить номер этапа к каждому элементу
    // const num = 3;

    if(Number === 1){
        return(
            <>
            <button className= {"prf-btn" + ((Number === 1) ? "-colored " : " ") + " prf-now-btn-1"}  onClick = {() => { if(Number === 1) setIsOpen((prev) => !prev)} } ></button>
            <button className={"prf-btn" + ((Number === 2) ? "-colored " : " ") + " prf-empty-btn-2"} onClick = {() => { if(Number === 2) setIsOpen((prev) => !prev)}} ></button>
            <button className={"prf-btn" +  ((Number === 3) ? "-colored " : " ") + " prf-empty-btn-3"} onClick = {() => { if(Number === 3) setIsOpen((prev) => !prev)}} ></button>
            { isOpen && 
            <p className = "prf-note">{props.text}</p>
            }
            </>
            )
    }
    else if(Number === 2){
    return(
        <>
        <button className= {"prf-btn" + ((Number === 1) ? "-colored " : " ") + "prf-passed-btn-1"}  onClick = {() => { if(Number === 1) setIsOpen((prev) => !prev)} } ></button>
        <button className={"prf-btn" + ((Number === 2) ? "-colored " : " ") + " prf-now-btn-2"} onClick = {() => { if(Number === 2) setIsOpen((prev) => !prev)}} ></button>
        <button className={"prf-btn" +  ((Number === 3) ? "-colored " : " ") + "prf-empty-btn-3"} onClick = {() => { if(Number === 3) setIsOpen((prev) => !prev)}} ></button>
        { isOpen && 
        <p className = "prf-note">{props.text}</p>
        }
        </>
        )
    }
    else{
        return(
        <>
        <button className= {"prf-btn" + ((Number === 1) ? "-colored " : " ") + "prf-passed-btn-1"}  onClick = {() => { if(Number === 1) setIsOpen((prev) => !prev)} } ></button>
        <button className={"prf-btn" + ((Number === 2) ? "-colored " : " ") + "prf-passed-btn-2"} onClick = {() => { if(Number === 2) setIsOpen((prev) => !prev)}} ></button>
        <button className={"prf-btn" +  ((Number === 3) ? "-colored " : " ") + " prf-now-btn-3"} onClick = {() => { if(Number === 3) setIsOpen((prev) => !prev)}} ></button>
        { isOpen && 
        <p className = "prf-note">{props.text}</p>
        }
        </>)
    }
}

export default ButtonState;