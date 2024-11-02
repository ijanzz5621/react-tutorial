import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Paris", "London", "New York", "San Francisco"];

  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButtonClick = () => {
    setAlertVisibility(true);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <br />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <strong>Sharizan</strong>
        </Alert>
      )}

      <br />

      <Button onClick={handleButtonClick}>Click Here</Button>
    </div>
  );
}

export default App;
