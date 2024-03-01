import React, { useEffect, useState } from 'react';
// import './index.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, List, Skeleton } from 'antd';
import {Link} from 'react-router-dom'
import {URL} from "../constants.js"
import useUsers from '../hooks/useUsers.js';
import Testing from './test.js';

const ManageL = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const {clients, setClients} = useUsers();
  // setClients([1, 2, 3])
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(`http://${URL}/client/list`)
    // fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) =>
       {
        return res.json()
        // setClients(JSON.parse(jsonData))
      }
      )

      .then((body) => {
        // console.log(body)
        setData(body.clients);
        setClients(prev => [...prev, ...body.clients])
        
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // console.log(data)
  // console.log(clients)
  // useEffect(() =>{setClients(prev => [...prev, ...data])}, [data])
  // useEffect(() =>{console.log("Changed clients:"); console.log("clients:", clients)}, [clients])

  useEffect(() => {
    loadMoreData();
  }, []);


  console.log("Changed ooutside useEffect")
  console.log(clients)
  console.log(typeof(data))

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={2}
        next={loadMoreData}
        hasMore={data.length < 50}
        // loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                title={<Link to={`/user/${item.email}`}>{item?.fullName}</Link>}
                description={item.email}
              />
              <div>
                <Link to={`/user/${item.email}`}>Profile</Link>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
      <Testing/>
    </div>
  );
};

export default ManageL;