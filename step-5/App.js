const App = (rootElement) => {
  let text = "";
  const setText = (newText) => {
    text = newText;
    render(text);
  };

  const render = (text) => {
    const input = document.createElement("input");
    input.placeholder = "Type here";
    input.value = text;
    input.addEventListener("input", (event) => {
      // Vue does some extra magic here
      // to prevent an infinite loop
      // from happening, but that is
      // very complicated.
      setText(event.data);
    });

    const p = document.createElement("p");
    const pText = document.createTextNode(text);
    p.appendChild(pText);

    rootElement.replaceChildren(input, p);
  };

  render(text);

  return {
    setText,
  };
};

const app = App(document.getElementById("app"));

app.setText("manually setting the input value");
