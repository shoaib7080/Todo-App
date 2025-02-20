function AppTodo() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter task" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success">Add task</button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
