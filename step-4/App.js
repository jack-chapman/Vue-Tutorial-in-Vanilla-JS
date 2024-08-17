const App = (rootElement) => {
  let count = 0;
  const setCount = (newCount) => {
    count = newCount;
    render(count);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const render = (count) => {
    const text = document.createTextNode(`Count is: ${count}`);
    const button = document.createElement("button");
    button.appendChild(text);
    button.addEventListener("click", () => {
      increment();
    });
    rootElement.replaceChildren(button);
  };
};

const app = App(document.getElementById("app"));
