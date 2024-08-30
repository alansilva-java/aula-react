"use client"
import { useEffect, useState } from "react";

 


const Page = () => {

  /*
  1. Definição da função que vai rodar.
  2. Definição de quando vai rodar
  3. Definição do que fazer quando o componente sumir/unload
  */

  const [ name, setName] = useState('Alan');
  const [ age, setAge] = useState('90')

  useEffect(() => {
    console.log('rodou o effect')
  }, [age]);


  

  return (
    <div className="flex flex-col px-3">
      <p>Meu nome é {name} e eu tenho {age} anos</p>
      <div className="flex flex-col">
      <button className=" hover:bg-opacity-50 text-left px-3 py2 rounded-md border border-blue-500 bg-red-400" onClick={() => setName('Pedro')}>Mudar para Pedro</button>
      <button className=" hover:bg-opacity-50 text-left px-3 py2 rounded-md border border-blue-500 bg-red-400" onClick={() => setName('João')}>Mudar para João</button>
      <button className=" hover:bg-opacity-50 text-left px-3 py2 rounded-md border border-blue-500 bg-red-400" onClick={() => setAge('18')}>Mudar idade para 18</button>
      <button className=" hover:bg-opacity-50 text-left px-3 py2 rounded-md border border-blue-500 bg-red-400" onClick={() => setAge('45')}>Mudar idade para 45</button>

      </div>
    </div>

  )
}

export default Page;