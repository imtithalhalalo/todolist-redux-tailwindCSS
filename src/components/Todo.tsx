import { useState } from "react";
import Dropdown from "./Dropdown";
import { useDispatch } from "react-redux";
import { addItem, searchItem } from "../redux/actions";
import TodoList from "./TodoList";

const Todo = () => {
    const [newItem, setNewItem] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch()
    const handleAdd = (text: string) => {
        dispatch(addItem(text));
    }
    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            handleAdd(newItem);
            setNewItem('');
        }
    }

    const handleSearchTerm = (value: string) => {
        setSearchTerm(value);
        dispatch(searchItem(value));
    }
    
    return (
        <> 
            <h2 className="text-slate-900 font-bold text-2xl text-center uppercase mb-4 mt-4">To Do</h2>

            <div className="max-w-4xl mx-auto sm:mt-0 p-8 bg-slate-800 rounded-lg">
            
            <div className="flex items-center justify-between text-sm">
                <input 
                    type="text" 
                    name="todo" 
                    id="todo" 
                    className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    placeholder="Add To Do"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)} 
                />
                <span onClick={handleAddItem} className="inline-flex items-center rounded-md bg-slate-50 py-1.5 pl-4 pr-4 ml-6 text-s font-bold text-center text-slate-700 ring-1 ring-inset ring-slate-700/10">+</span>
            </div>

            <div className="flex justify-between items-center mt-10">
                <Dropdown />

                <div className="flex items-center justify-between text-sm">
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        className="rounded-md border-0 text-gray-900 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full" 
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => handleSearchTerm(e.target.value)} 
                    />
                    <button 
                        className="inline-flex items-center rounded-md py-1.5 pl-4 pr-4 ml-6 text-s font-bold text-center cursor-pointer border-none bg-teal-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                    </button>
                </div>
            </div>
            
            
            <TodoList />
            </div>
        </>
    )
    
}

export default Todo;