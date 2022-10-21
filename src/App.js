import "./style.css";
import Header from "./components/Header";
import React from "react";
import Main from "./components/Main";

function App() {
  const [userData, setUserData] = React.useState([] || null);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  console.log(userData && userData);

  return (
    <div className="App">
      <Header />
      <Main userData={userData && userData} />
    </div>
  );
}

export default App;
