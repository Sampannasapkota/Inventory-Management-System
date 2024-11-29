import { useState, useEffect } from "react";
import CustomInput from "./customInput";
import "./form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, description, quantity);
  }

  const postMockData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: "Test",
            body: "This is test data",
            userId: 1
          }),
        }
      );
      console.log({ response });
      if (response.status === 201) {
        const data = await response.json();
        console.log({ data });
      }
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    postMockData();
  }, []);


  return (
    <div className="form container">
      <form>
        <CustomInput label="Name" setValue={setName} />
        <CustomInput label="Description" setValue={setDescription} />
        <CustomInput label="Quantity" setValue={setQuantity} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
export default Form; // default export
// export { Form }; // named export or module export