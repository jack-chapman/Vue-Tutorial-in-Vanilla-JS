const App = (rootElement) => {
  const text = document.createTextNode("Hello World!");
  const h1 = document.createElement("h1");
  h1.appendChild(text);
  rootElement.replaceChildren(h1);
};
