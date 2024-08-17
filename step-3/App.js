const App = (rootElement) => {
  let titleClass = "title";
  const setTitleClass = (newTitleClass) => {
    titleClass = newTitleClass;
    render(titleClass);
  };

  const render = (titleClass) => {
    const text = document.createTextNode("Make me red");
    const h1 = document.createElement("h1");
    h1.appendChild(text);
    h1.removeAttribute("class");
    h1.classList.add(titleClass);
    rootElement.replaceChildren(h1);
  };

  render(titleClass);

  return { setTitleClass };
};

const app = App(document.getElementById("app"));

app.setTitleClass("hello!");
