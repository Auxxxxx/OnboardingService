import React, {useState, useEffect} from 'react';
import '../buttons-states.css'

//type {
//  email: string,
//  image: "url"
//}

function ButtonState(props){
    console.log("buttonsState", props.stage, props.status)
    //props.state 
    const [isOpen, setIsOpen] = useState(false);
    // const [Number, setNumber] = useState(props?.stage);          //прикрутить номер этапа к каждому элементу
    const stage = props.stageData.stage;
    const status = props.stageData.status[stage-1]; 
    console.log(stage)

    // useEffect(() => {
    //     setNumber(props.stage);
    // }, [props.stage]);


    if(stage === 1){
        return(
            <>
            <button className= {"prf-btn" + ((stage === 1) ? "-colored " : " ") + " prf-now-btn-1"}  onClick = {() => { if(stage === 1) setIsOpen((prev) => !prev)} } ></button>
            <button className={"prf-btn" + ((stage === 2) ? "-colored " : " ") + " prf-empty-btn-2"} onClick = {() => { if(stage === 2) setIsOpen((prev) => !prev)}} ></button>
            <button className={"prf-btn" +  ((stage === 3) ? "-colored " : " ") + " prf-empty-btn-3"} onClick = {() => { if(stage === 3) setIsOpen((prev) => !prev)}} ></button>
            { isOpen && 
            <p className = "prf-note">{status}</p>
            }
            </>
            )
    }
    else if(stage === 2){
    return(
        <>
        <button className= {"prf-btn" + ((stage === 1) ? "-colored " : " ") + "prf-passed-btn-1"}  onClick = {() => { if(stage === 1) setIsOpen((prev) => !prev)} } ></button>
        <button className={"prf-btn" + ((stage === 2) ? "-colored " : " ") + " prf-now-btn-2"} onClick = {() => { if(stage === 2) setIsOpen((prev) => !prev)}} ></button>
        <button className={"prf-btn" +  ((stage === 3) ? "-colored " : " ") + "prf-empty-btn-3"} onClick = {() => { if(stage === 3) setIsOpen((prev) => !prev)}} ></button>
        { isOpen && 
        <p className = "prf-note">{status}</p>
        }
        </>
        )
    }
    else if(stage === 3){
        return(
        <>
        <button className= {"prf-btn" + ((stage === 1) ? "-colored " : " ") + "prf-passed-btn-1"}  onClick = {() => { if(stage === 1) setIsOpen((prev) => !prev)} } ></button>
        <button className={"prf-btn" + ((stage === 2) ? "-colored " : " ") + "prf-passed-btn-2"} onClick = {() => { if(stage === 2) setIsOpen((prev) => !prev)}} ></button>
        <button className={"prf-btn" +  ((stage === 3) ? "-colored " : " ") + " prf-now-btn-3"} onClick = {() => { if(stage === 3) setIsOpen((prev) => !prev)}} ></button>
        { isOpen && 
        <p className = "prf-note">{status}</p>
        }
        </>)
    } else {
        return(
            <>
            <button className= {"prf-btn" + ((stage === 1) ? "-colored " : " ") + "prf-passed-btn-1"}  onClick = {() => { if(Number === 1) setIsOpen((prev) => !prev)} } ></button>
            <button className={"prf-btn" + ((stage === 2) ? "-colored " : " ") + "prf-passed-btn-2"} onClick = {() => { if(Number === 2) setIsOpen((prev) => !prev)}} ></button>
            <button className={"prf-btn" +  ((stage === 3) ? "-colored " : " ") + " prf-passed-btn-3"} onClick = {() => { if(Number === 3) setIsOpen((prev) => !prev)}} ></button>
            { isOpen && 
            <p className = "prf-note">{status}</p>
            }
            </>)

    }

}

export default ButtonState;