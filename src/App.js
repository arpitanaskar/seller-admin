import Content from "./components/Content";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const dataHandler = (newData) => {
    setData((prevData) => [...prevData, newData]);

    console.log(data);
  };
  return (
    <>
      <Form onReceiveData={dataHandler} />
      <Content data={data} />
    </>
  );
};

export default App;
