const TodoTypeBtnGroup = ({ condition, setCondition }) => {
    return (
        <div className='flex -mx-1 my-3'>
            <button type="button" onClick={() => setCondition(null)}
                className={`btn-main mx-1 ${condition === null ? 'bg-blue-700 text-white' : ''}`}>
                All
            </button>
            <button type="button"
                onClick={() => setCondition(false)}
                className={`btn-main   mx-1 ${condition === false ? 'bg-blue-700 text-white' : ''}`}>
                Active
            </button>
            <button type="button"
                onClick={() => setCondition(true)}
                className={`btn-main mx-1 ${condition === true ? 'bg-blue-700 text-white' : ''}`}>
                Completed
            </button>
        </div>
    )
}

export default TodoTypeBtnGroup