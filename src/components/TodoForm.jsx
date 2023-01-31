import { useApolloStore } from "../store";




const TodoForm = () => {
    
    const [state, setState] = useApolloStore();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = new Date().getTime();
        const formData = new FormData(e.target)
        const todo = formData.get('todo');
        setState((prev) => {
            return [...prev, { id, name: todo, completed: false }]
        })
        e.target.reset();
    }
    
    return (
        <form className='flex  items-end' onSubmit={handleSubmit}>
            <div className='w-full'>
                <label htmlFor="todo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Todo</label>
                <input type="text"
                    name='todo'
                    className="bg-gray-50  border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="ml-2">
                <button type="submit"
                    className="btn-main">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default TodoForm