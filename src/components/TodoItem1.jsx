function TodoItem1() {
  let TodoName = "Buy Milk";
  let TodoDate = "04/10/2024";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button class="btn btn-danger">Delete task</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
