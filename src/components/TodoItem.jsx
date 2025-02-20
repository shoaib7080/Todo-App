function TodoItem({ TodoName, TodoDate }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger">Delete task</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
