const TodoTypeBtnGroup = ({ setCondition }) => {
    return (
        <div className='flex -mx-1 my-3'>
            <button type="button" onClick={() => setCondition(null)}
                className="btn-main mx-1">
                All
            </button>
            <button type="button"
                onClick={() => setCondition(false)}
                className="btn-main mx-1">
                Active
            </button>
            <button type="button"
                onClick={() => setCondition(true)}
                className="btn-main mx-1">
                Completed
            </button>
        </div>
    )
}

export default TodoTypeBtnGroup