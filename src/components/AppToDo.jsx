function AppTodo() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter task" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button class="btn btn-success">Add task</button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
