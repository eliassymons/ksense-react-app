import Button from "react-bootstrap/Button";
import React from "react";
import Post from "./Post";

function Main(props) {
  const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [active, setActive] = React.useState(0);

  let currUser = active && props.userData.filter((o) => o.userId === active);
  function handleClick(e) {
    e.preventDefault();
    e.target.variant = "primary";
    setActive(parseInt(e.target.value));
  }
  console.log(active);
  console.log(currUser);

  const buttons = userIds.map((id) => {
    return (
      <Button
        variant="outline-secondary"
        value={id}
        className={active === id ? "btn-active" : ""}
        onClick={handleClick}
        key={id}
      >
        {id}
      </Button>
    );
  });

  const posts =
    active > 0 ? (
      currUser.map((u) => {
        return <Post title={u.title} body={u.body} key={u.title} />;
      })
    ) : (
      <h3>Select a user to view their posts.</h3>
    );
  return (
    <div className="main-container">
      <h2>Users:</h2>
      <div className="buttons">{buttons}</div>
      <div className="posts">{posts}</div>
    </div>
  );
}

export default Main;
