const App = (rootElement) => {
  let id = 0;

  let newTodo = "";
  const setNewTodo = (newNewTodo) => {
    newTodo = newNewTodo;
    render(newTodo, todos);
  };

  let hideCompleted = false;
  const setHideCompleted = (newHideCompleted) => {
    hideCompleted = newHideCompleted;
    render(newTodo, hideCompleted, todos);
  };

  const todos = [
    { id: id++, text: "Learn HTML", done: true },
    { id: id++, text: "Learn JavaScript", done: true },
    { id: id++, text: "Learn Vue", done: false },
  ];
  const setTodos = (newTodos) => {
    todos = newTodos;
    render(newTodo, hideCompleted, todos);
  };

  const filteredTodos = () => {
    return hideCompleted ? todos.filter((t) => !t.done) : todos;
  };

  const addTodo = () => {
    setTodos([...todos, { id: id++, text: newTodo, done: false }]);
    setNewTodo("");
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const render = (newTodo, hideCompleted, todos) => {
    const form = document.createElement("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      addTodo();
    });

    const input = document.createElement("input");
    input.value = newTodo;
    input.required = true;
    input.placeholder = "new todo";
    input.addEventListener("input", (event) => {
      setNewTodo(event.data);
    });

    const button = document.createElement("button");
    const buttonText = document.createTextNode("Add todo");
    button.appendChild(buttonText);

    form.append(input, button);

    const ul = document.createElement("ul");
    const lis = filteredTodos().map((todo) => {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = todo.done;
      checkbox.addEventListener("change", (event) => {
        todo.done = event.target.checked;
        render(newTodo, hideCompleted, todos);
      });

      const span = document.createElement("span");
      const spanText = document.createTextNode(todo.text);
      todo.done ? span.classList.add("done") : span.classList.remove("done");
      span.appendChild(spanText);

      const button = document.createElement("button");
      const buttonText = document.createTextNode("X");
      button.appendChild(buttonText);
      button.addEventListener("click", () => removeTodo(todo));
      li.append(checkbox, span, button);
      return li;
    });
    ul.append(...lis);

    const hideButton = document.createElement("button");
    const hideButtonTextValue = hideCompleted ? "Show all" : "Hide completed";
    const hideButtonText = document.createTextNode(hideButtonTextValue);
    hideButton.addEventListener("click", () => {
      setHideCompleted(!hideCompleted);
    });
    hideButton.appendChild(hideButtonText);

    rootElement.replaceChildren(form, ul, hideButton);
  };

  render(newTodo, todos);
};

const app = App(document.getElementById("app"));
