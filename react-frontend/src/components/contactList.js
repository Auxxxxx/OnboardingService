import React, {useState, useEffect, useCallback} from 'react';
import Pagination from './pagination';
import useAuth from '../hooks/useAuth';
import { URL } from '../constants';

const ContactList = (props) => {
    // получение данных с innerPages
    const [isLoading, setIsLoading ] = useState(true); 
    const [data, setData] = useState({data: []});
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const email = useAuth().email;

  //   const [data, setData] = useState({data: ["Name: Anna, Phone: 555-123-4567, Email: anna@mail.com"
  //   , "Name: Peter, Phone: 555-987-6543, Email: peter@mail.com", 
  //   " Name: Catherine, Phone: 555-456-7890, Email: catherine@mail.com"
  // , "Name: Ivan, Phone: 555-246-1359, Email: ivan@mail.com"
  // , "Name: Maria, Phone: 555-789-3210, Email: maria@mail.com"
  // , "Name: Alexey, Phone: 555-594-2673, Email: alexey@mail.com"
  // , "Name: Olga, Phone: 555-315-9876, Email: olga@mail.com"
  // , " Name: Sergey, Phone: 555-753-1986, Email: sergey@mail.com"
  // , "Name: Ivan, Phone: 555-246-1359, Email: ivan@mail.com"
  // , "Name: Maria, Phone: 555-789-3210, Email: maria@mail.com"
  // , "Name: Alexey, Phone: 555-594-2673, Email: alexey@mail.com"
  // , "Name: Olga, Phone: 555-315-9876, Email: olga@mail.com"
  // ]});
    

    const ITEMS_PER_PAGE = 10;

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const handleNextPageClick = useCallback(() => {
        const current = page;
        const next = current + 1;
        const totl = data ? total : current;
    
        setPage(next <= totl ? next : current);
      }, [page, data, total]);
    
      const handlePrevPageClick = useCallback(() => {
        const current = page;
        const prev = current - 1;
    
        setPage(prev > 0 ? prev : current);
      }, [page]);


    // setData(props.list)
    // useEffect(() => {

    //   async function asyncFetch() {
    //   // Выполнение запроса при монтировании компонента
    //   fetch(`http://${URL}/note/contact-details/${email}`, )
    //     .then(response => 
    //       {
    //       const temp = await response.json()
    //       setData(JSON.parse(temp))
    //       return (temp)
    //     }
    //       )
    //     .catch(error => {
    //       console.error('Ошибка получения данных:', error);
    //     });
    //     setTimeout(() => {
    //       setIsLoading(false);
    //     }, 2000);
    //   }

    //   asyncFetch()

    // }, []);

    useEffect(() => {
      fetchData();
    }, []);

    // Function to fetch data
  const fetchData = async () => {
      // Make a GET request using the Fetch API
      const request = fetch(`http://${URL}/note/contact-details/${email}`)
      .then((response) => {
        response.json().then(function(result){
          setData({'data': result.contactDetails.content})
        }
        )
      }) 
      .catch(err => console.log(err))
    
  };

    // {nsole.log("Ошибка в получении данных в contactList");
    //     }
    //     // setTotal(Math.ceil(data.data.length / ITEMS_PER_PAGE));
    //     setTimeout(() => {
    //         setIsLoading(false);
    //       }, 2000);
    // }, [data])

    useEffect(() =>{
      setTotal(Math.ceil(data.data.length / ITEMS_PER_PAGE));
        setTimeout(() => {
            setIsLoading(false);
          }, 2000);
          console.log(data)
    }, [data])


    const noteList = data.data.slice(startIndex, endIndex); 
    const noteListTest = props.list;
    // console.log("startIndex :" + startIndex + "endIndex:" + endIndex)
    const viewNoteList = noteList.map((item, index) => 
    {if (
        typeof(item) == "string" &&
        item.length <= 255){
        return <li className = {props.class + "-li"} key = {index}>
        <p>{item}</p>
      </li>
      } else {
        return (<li className = {props.class + "-li"} key = {index}>
        <p>{item}</p> 
        </li>
        )
      }

      //return 
    }
    ); 

    if(isLoading) return <p className = "p-loading">Loading...</p>;

    return(
    <>
    <ul className="contacts-ul">
        {viewNoteList}
    </ul>
    {data && (
        <Pagination
          onNextPageClick={handleNextPageClick}
          onPrevPageClick={handlePrevPageClick}
          disable={{
            left: page === 1,
            right: page === total,
          }}
          nav={{ current: page, total: total }}
        />
      )}
    </>
    );
}

export default ContactList;