import  { useState } from "react";
import CustomInput from "../../Components/customInput";
import "../../Components/form.css";
import { useNavigate } from "react-router";
import axios from "axios";

enum ENUM_DISCOUNT {
  RATE = "RATE",
  AMOUNT = "AMOUNT",
}

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZV9pZCI6MSwib3JnYW5pemF0aW9uX2lkIjoyLCJuYW1lIjoiU2F0eWFtIiwiZW1haWwiOiJoZW9AZ21haWwuY29tIiwibW9iaWxlIjoiOTAwMDAiLCJwYXNzd29yZCI6IiQyYiQxMCRJdXpqTFVQaW1TYThmRjFaT3FqSGhlU0Y2a0RqL25oOEVKNUhIU0JudGtzbGxORWk5RG9TLiIsImNyZWF0ZWRfYXQiOiIyMDI0LTA5LTA5VDA5OjUwOjAxLjUxNVoiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wOS0wOVQwOTo1MDowMS41MTVaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkR1bW15IFJvbGUifSwib3JnYW5pemF0aW9uIjp7ImlkIjoyLCJuYW1lIjoiUHVueWFtIiwiYWRkcmVzcyI6Ikl0YWhhcmkiLCJ0eXBlIjoicmV0YWlsIiwicGhvbmUiOiI5ODAwMDAwMCIsImNyZWF0ZWRfYXQiOiIyMDI0LTA5LTA4VDA5OjU4OjE4LjYwMFoiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wOS0wOFQwOTo1ODoxOC42MDBaIn0sImlhdCI6MTczMjY5NDcyMiwiZXhwIjoxNzMzOTkwNzIyfQ.40iXF68ZR_HvXboGJses7jEn_yhCekg4pJapnMogvsc";
const AddProducts = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

 
  const [discountType, setDiscountType] = useState<ENUM_DISCOUNT>(
    ENUM_DISCOUNT.AMOUNT
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, description, quantity, price, discount, discountType);
    addItem();
  };
  const addItem = async () => {
    console.log(name, description, quantity, price, discount, discountType);

    try {
      const response = await axios("http://localhost:8000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        data: {
          name,
          description,
          quantity: parseInt(quantity),
          price: parseFloat(price),
          discount: parseFloat(discount),
       
          discountType: parseFloat(discountType),
       
        },
        // body: JSON.stringify({
        //   name,
        //   description,
        //   quantity: parseInt(quantity, 10),
        //   price:parseInt(price,10),
        //   discount:parseInt(discountType,10),

        // })
      });
      console.log({ response });
      // if(response.status===201){
      //   const data=await response.json();
      //   console.log({data});
      // }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="form container">
        <button
          style={{
            width: "auto", // Adjust width to fit content
            padding: "8px 16px", // Balanced padding
            backgroundColor: "#4caf50", // Green background
            color: "#fff", // White text
            border: "none", // No border
            borderRadius: "4px", // Slightly rounded corners
            fontSize: "14px", // Standard font size
            cursor: "pointer", // Pointer cursor for feedback
          }}
          onClick={() => {
            navigate("/products");
          }}
        >
          Back
        </button>

        <h1>Add Products</h1>
        {/* <button className='button-back'
          style={{ marginLeft: 16, padding: "4px 16px", width: "30%" }}
          onClick={() => {
            navigate("/products");
          }}
          >
         Back
        </button> */}

        <form onSubmit={handleSubmit}>
          <CustomInput label="Name" setValue={setName} />
          <CustomInput label="Description" setValue={setDescription} />
          <CustomInput label="Quantity" setValue={setQuantity} />
          <CustomInput label="Price" setValue={setPrice} />
          <CustomInput label="Discount" setValue={setDiscount} />
        
       

          <div>
            <p>Discount Type:</p>
            <div style={{ display: "flex" }}>
              <CustomInput
                type="radio"
                label="Rate"
                setValue={() => setDiscountType(ENUM_DISCOUNT.RATE)}
                checked={ENUM_DISCOUNT.RATE === discountType}
              />
              <CustomInput
                type="radio"
                label="Amount"
                setValue={() => setDiscountType(ENUM_DISCOUNT.AMOUNT)}
                checked={ENUM_DISCOUNT.AMOUNT === discountType}
              />
            </div>
          </div>

          <button type="submit" className="button-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
