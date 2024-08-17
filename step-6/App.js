const App = (rootElement) => {
  let awesome = true;
  const setAwesome = (newAwesome) => {
    awesome = newAwesome;
    render(awesome);
  };

  const toggle = () => {
    setAwesome(!awesome);
  };

  const render = (awesome) => {
    const button = document.createElement("button");
    const buttonText = document.createTextNode("Toggle");
    button.appendChild(buttonText);
    button.addEventListener("click", () => {
      toggle();
    });

    const h1 = document.createElement("h1");
    const h1TextValue = awesome ? "Vue is awesome!" : "Oh no 😢";
    const h1Text = document.createTextNode(h1TextValue);
    h1.appendChild(h1Text);

    rootElement.replaceChildren(button, h1);
  };

  render(awesome);
};

const app = App(document.getElementById("app"));
