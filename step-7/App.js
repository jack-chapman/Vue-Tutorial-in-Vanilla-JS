const App = (rootElement) => {
  let id = 0;

  let newTodo = "";
  const setNewTodo = (newNewTodo) => {
    newTodo = newNewTodo;
    render(newTodo, todos);
  };

  const todos = [
    { id: id++, text: "Learn HTML" },
    { id: id++, text: "Learn JavaScript" },
    { id: id++, text: "Learn Vue" },
  ];
  const setTodos = (newTodos) => {
    todos = newTodos;
    render(newTodo, todos);
  };

  const addTodo = () => {
    setTodos([...todos, { id: id++, text: newTodo }]);
    setNewTodo("");
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const render = (newTodo, todos) => {
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
    const lis = todos.map((todo) => {
      const li = document.createElement("li");
      const liText = document.createTextNode(todo.text);
      const button = document.createElement("button");
      const buttonText = document.createTextNode("X");
      button.appendChild(buttonText);
      button.addEventListener("click", () => removeTodo(todo));
      li.append(liText, button);
      return li;
    });
    ul.append(...lis);

    rootElement.replaceChildren(form, ul);
  };

  render(newTodo, todos);
};

const app = App(document.getElementById("app"));
