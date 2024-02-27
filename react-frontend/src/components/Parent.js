import React, {useState} from 'react'
import Login from './login.component';
import SignUp from './signup.component';

const Parent = (props) => {
    const [registreted, setRegistreted] = useState(['1']);

    return(<>
    {props.login && <Login registreted={registreted} setRegistreted={setRegistreted}></Login>}

    {!props.login && <SignUp registreted={registreted} setRegistreted={setRegistreted}></SignUp>}
    </>
    )
}

export default Parent;