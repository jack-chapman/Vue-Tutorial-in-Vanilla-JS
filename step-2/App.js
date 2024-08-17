const App = (rootElement) => {
  // message ref
  let message = "Hello World!";
  const setMessage = (newMessage) => {
    message = newMessage;
    render(message, counter);
  };

  // counter reactive
  const counter = {
    count: 0,
  };
  const setCounter = (newCount) => {
    counter.count = newCount;
    render(message, counter);
  };

  const render = (message, counter) => {
    const messageText = document.createTextNode(message);
    const h1 = document.createElement("h1");
    h1.appendChild(messageText);

    const counterText = document.createTextNode(`Count is: ${counter.count}`);
    const p = document.createElement("p");
    p.appendChild(counterText);

    rootElement.replaceChildren(h1, p);
  };

  render(message, counter);

  return {
    setCounter,
    setMessage,
  };
};

const app = App(document.getElementById("app"));

app.setMessage("hello!");
app.setCounter(10);
