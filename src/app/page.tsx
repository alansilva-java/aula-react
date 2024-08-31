"use client"
import { useEffect, useState } from "react";

 


const Page = () => {

  const [ firstName, setFirstName] = useState('Alan');
  const [ lastName, setLastName] = useState('Silva')
  const [ fullName, setFullName] = useState('');

  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);


  

  return (
    <div className="flex flex-col px-3">
      <p>Meu nome é {fullName}</p>
      <div className="flex flex-col">
      <button className=" hover:bg-opacity-50 text-left px-3 py2 rounded-md border border-blue-500 bg-red-400" onClick={() => setFirstName('Pedro')}>Mudar para Pedro</button>
      <button className=" hover:bg-opacity-50 text-left px-3 py2 rounded-md border border-blue-500 bg-red-400" onClick={() => setFirstName('João')}>Mudar para João</button>
      </div>
    </div>

  )
}

export default Page;