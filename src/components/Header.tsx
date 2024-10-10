import {  usePosts } from "@/app/contexts/PostContext";
import {  useState } from "react"

export const Header = () => {
    const postCtx = usePosts();

    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');

    const handleButton = () => { 
        if(titleInput && bodyInput) {
            postCtx?.addPost(titleInput, bodyInput);
            setTitleInput('');
            setBodyInput('');
        }
    }
    return (
        <header>
            <h1 className="text-3xl">Título Da Pagina </h1>

            <div className="max-w-xl flex flex-col gap-3 border border-dotted border-gray-400 p-3 my-4">
                <input 
                 type="text"
                    placeholder="Digite um titulo"
                    className="border border-gray-300 p-2 text-black text-xl"
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                 />   
                 <textarea
                    className="border border-gray-300 p-2 text-black text-xl"
                    placeholder="Digite um corpo"
                    value={bodyInput}
                    onChange={e => setBodyInput(e.target.value)} 
                ></textarea>
                 <button 
                    className="bg-blue-500 p-3 text-white rounded-md"
                    onClick={handleButton}
                    >Adcionar
                 </button>
            </div>
        </header>
    )
}