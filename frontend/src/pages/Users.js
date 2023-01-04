import { UsersTable } from '../components/users/UsersTable';
import { NewUserBox } from '../components/users/NewUserBox';
import React, { useEffect, useState } from "react";

export const Users = () => {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/users").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  
  return (
    <>
    <UsersTable users={backendData} />
    <br />
    <NewUserBox />
    </>
  );
};