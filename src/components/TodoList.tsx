import { useDispatch, useSelector } from "react-redux";
import { Switch } from '@headlessui/react';
import { checkItem, deleteItem } from "../redux/actions";
import EmptyState from "./EmptyState";

const TodoList = () => {
    const dispatch = useDispatch();

    const filterTodos = useSelector((state: any) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo: any) => {
            const matchFilter = (filter === 'COMPLETED' && todo.completed) || (filter === 'INCOMPLETED' && !todo.completed) || (filter === 'ALL');

            const matchSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchFilter && matchSearch;
        })
    });

    return (
        <>
         <div className="mt-3 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                
                <dt className="text-lg leading-6 font-semibold text-slate-100">Your List</dt>
                
                {
                    filterTodos.length === 0 && ( <EmptyState /> )
                    || 
                    <dd className="mt-2 text-sm text-slate-200 sm:col-span-2 sm:mt-0">
                        <ul role="list" className="divide-y divide-slate-100 rounded-md border border-slate-200">
                            {
                                filterTodos.map((todo: any, index: number) => (
                                    <li key={index} className={`flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 `}>
                                        <div className="flex w-0 flex-1 items-center">
                                            <Switch
                                                checked={todo.completed}
                                                onChange={() => dispatch(checkItem(index))}
                                                className={`${
                                                    todo.completed ? 'bg-teal-400' : 'bg-yellow-200'
                                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                                            >
                                                <span
                                                    className={`${
                                                        todo.completed ? 'translate-x-6' : 'translate-x-1'
                                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                                />
                                            </Switch>
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className={` ${todo.completed ? `line-through text-teal-200` :  `` } truncate font-medium`}>{todo.text}</span>
                                            <span className={`flex-shrink-0 pt-.5 pb-.5 pl-1 pr-1 rounded-lg ${todo.completed ? `text-teal-300 hover:bg-teal-100 hover:text-teal-600` :  `text-yellow-300 hover:bg-yellow-50 hover:text-yellow-600` }`}>
                                                {todo.completed ? 'completed' : 'incompleted'}
                                            </span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium hover:text-rose-400 text-rose-600" onClick={() => dispatch(deleteItem(index))}>Delete</a>
                                        </div>
                                    </li>
                                ))
                            }                    
                        </ul>
                    </dd>
                }
                
         </div>
        
        
        </>
    )
}

export default TodoList;