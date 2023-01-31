import { Fragment, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoType from './components/TodoType';
import { useApolloStore } from './store'

const App = () => {

    const [state, setState] = useApolloStore();
    const [condition, setCondition] = useState(null);

    const handleDelete = (id) => {
        setState((prev) => prev.filter(todo => todo.id !== id));
    }

    const handleChecked = (e, id) => {
        const checked = e.target.checked;
        setState(prev => prev.map(todo => {
            if (todo.id === id) todo.completed = checked;
            return todo;
        }))
    }

    const handleClearCompleted = () => {
        setState(prev => prev.filter(todo => !todo.completed))
    }

    const handleToggleChecked = () => {
        const checked = state.find(todo => todo.completed === false) ? true : false;
        setState(prev => prev.map((todo) => {
            todo.completed = checked
            return todo;
        }))
    }

    return (
        <div className='container flex justify-center'>
            <div className="max-w-sm mt-5 w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <TodoForm />
                <TodoType setCondition={setCondition} />
                {state.filter((todo) => {
                    return condition === null || todo.completed === condition;
                }).map((todo) => <Fragment key={todo.id}>
                    <TodoItem handleChecked={handleChecked} handleDelete={handleDelete} todo={todo} />
                </Fragment>)}
                <p>
                    {state.filter(todo => todo.completed === false).length} left
                </p>
                <div className='-mx-1 flex mt-2'>
                    <button type="button" onClick={handleToggleChecked}
                        className="btn-main mx-1">
                        {!state.length || state.find(todo => todo.completed == false) ? 'Check All' : 'Unchecked All'}
                    </button>
                    <button type="button" onClick={handleClearCompleted}
                        className="btn-main mx-1">
                        Clear Completed
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App