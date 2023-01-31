import { Fragment, useMemo, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoType from './components/TodoType';
import { useApexStore } from './store'

const App = () => {

    const [state, dispatch] = useApexStore();

    const [condition, setCondition] = useState(null);

    const handleDelete = (id) => dispatch({ type: 'DELETE', id })

    const handleChecked = (e, id) => dispatch({ type: 'CHECK', id, checked: e.target.checked })

    const handleClearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' })

    const handleToggleChecked = () => {

        if (state.find(todo => todo.completed === false)) {
            dispatch({ type: 'CHECK_ALL' })
            return;
        }

        dispatch({ type: 'UNCHECK_ALL' })
    }


    const todoMemo = useMemo(() => {
        return state.filter((todo) => condition === null || todo.completed === condition)
    }, [state, condition])

    const toggleMemo = useMemo(() => {
        return !state.length || state.find(todo => todo.completed == false) ? 'Check All' : 'Unchecked All'
    }, [state])


    return (
        <div className='container flex justify-center'>
            <div className="max-w-sm mt-5 w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <TodoForm />
                <TodoType condition={condition} setCondition={setCondition} />
                {todoMemo.map(todo => <Fragment key={todo.id}>
                    <TodoItem
                        handleChecked={handleChecked}
                        handleDelete={handleDelete}
                        todo={todo} />
                </Fragment>)}
                <p>
                    {state.filter(todo => !todo.completed).length} left
                </p>
                <div className='-mx-1 flex mt-2'>
                    <button type="button" onClick={handleToggleChecked}
                        className="btn-main mx-1">
                        {toggleMemo}
                    </button>
                    <button type="button" onClick={handleClearCompleted}
                        className="btn-main mx-1">
                        Clear completed
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App