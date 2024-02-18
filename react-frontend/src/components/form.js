import React, {useState} from 'react';

export function Form(props) {
    //0 - данные не отправлялись, нет ничего, 1 - данные отправлены, успешно, 2 - данные отправлены, не успешно,
    //props.onClick - функция для отправки данных
    const [isSubmitted, setIsSubmitted] = useState(0); 

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let form = e.target;
        console.log(form);
        let formData = new FormData(form);
        //отладка
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            // setIsSubmitted(1);
            console.log(setIsSubmitted);
        //
        fetch('http://localhost:8080/note/contact-details', {
        method: 'PUT',
        body: JSON.stringify({ "content": [], recipientEmail: ""})

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
//  отладка метода:
    }


    return(<>
        <h2>{props.header}</h2>
        <form method="post" onSubmit={handleSubmit}>
        <div>
          <input className={"user-inp-"+ props.class} type="text" name={"note-"+ props.id} required maxLength={"511"} placeholder={props.placeholder}/> 
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

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let form = e.target;
        console.log(form);
        let formData = new FormData(form);
        //отладка
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            // setIsSubmitted(1);
            console.log(setIsSubmitted);
        //
        if(props.name === "meeting-notes"){
            const request = fetch('http://localhost:8080/note/meeting-notes', {
              method: 'PUT',
              body: JSON.stringify({id: 0, "content": [], header: "", recipientEmail: ""})
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
        if(err.status === 404) {console.log("Такого пользоватлея нет")}
        else console.log("Ошибка в отправке данных")

      })

    } else{
        const request = fetch('http://localhost:8080/note/useful-info', {
              method: 'PUT',
              body: JSON.stringify({id: 0, "content": [], header: "", recipientEmail: ""})
            })
      .then(response => {
        if(!response.ok){
          throw new Error("error in sending data") 
        }    
        setIsSubmitted(1);   
      })
      .catch(err => {
        setIsSubmitted(2);
        if(err.status === 404) {console.log("Такого пользоватлея нет")}
        else console.log("Ошибка в отправке данных")

    })
    }
//  отладка метода:
    }

    return(<>
        <h2>{props.header}</h2>
        <form method="post" onSubmit={handleSubmit}>
        <div>
          <textarea className={"user-inp-"+ props.class} type="text" rows="4" name={"note-"+ props.id} required maxLength={"511"} placeholder={props.placeholder}/> 
          <input className="user-btn" type="submit" value="Add"/>
          {/* добавить textarea для заметок */}
          {(isSubmitted === 1) && <p className="form-scsf">Succesful</p>}
          {(isSubmitted === 2) && <p className="form-bad">Unsuccesful, send data again</p>}
          {}
        </div>
        </form>
        </>)
}

