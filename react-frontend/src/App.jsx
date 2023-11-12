// import

// const App = () => {
//     //состояния
//     const = [email, setEmail] = useState('');
//     const = [password, setPAsswonrd] = useState('');  
//     const [emailDirty, setEmailDirty] = useState(false);
//     const [passwordDirty, setPAssworndDirty] = useState(false)
//     const [emailError, setEmailError] = useState('Емейл не может быть пустным')
//     const [passwordError, setPasswordError] = useState('Пароль не может быть пустым ')

//    const blurHandler = (e) => {
//         switch (e.target.name) {
//             case 'email':
//                 setEmailDirty(true)
//                 break
//             case 'password':
//                 setPasswonrdDirty(true)
//                 break
//         }
//    }

//     const emailHandler = (e) => {
//             SetEmail(e.target.value)
//             const re = /^
//             if (!re.test(String(.target.velue).toLowerCase()))
//                 setEmailError('Некотрректный пароль')
//             else {
//                 setEmailAdress("")
//             }

//         }



//     return (
//     <div className='app'>
//        <form>
//        <h1>Регистрация</h1>
//        //добавили атрибуты onBlur в input
//        {(emailDirty || emailError) && <div style={{color: 'red'}}>{emailError}</div>}
//        <input value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Enter your email/"/>
//        <input onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Enter your password..."/>
//        <button onclick="" type="submit">Registration</button>
//        </form>
//     </div>);
// }

// export default App;
// App()






