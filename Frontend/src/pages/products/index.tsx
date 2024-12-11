import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Data from "../../data.json";
import { useNavigate } from "react-router";
import "./productList.css";
import axios from "axios";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZV9pZCI6MSwib3JnYW5pemF0aW9uX2lkIjoyLCJuYW1lIjoiU2F0eWFtIiwiZW1haWwiOiJoZW9AZ21haWwuY29tIiwibW9iaWxlIjoiOTAwMDAiLCJwYXNzd29yZCI6IiQyYiQxMCRJdXpqTFVQaW1TYThmRjFaT3FqSGhlU0Y2a0RqL25oOEVKNUhIU0JudGtzbGxORWk5RG9TLiIsImNyZWF0ZWRfYXQiOiIyMDI0LTA5LTA5VDA5OjUwOjAxLjUxNVoiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wOS0wOVQwOTo1MDowMS41MTVaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkR1bW15IFJvbGUifSwib3JnYW5pemF0aW9uIjp7ImlkIjoyLCJuYW1lIjoiUHVueWFtIiwiYWRkcmVzcyI6Ikl0YWhhcmkiLCJ0eXBlIjoicmV0YWlsIiwicGhvbmUiOiI5ODAwMDAwMCIsImNyZWF0ZWRfYXQiOiIyMDI0LTA5LTA4VDA5OjU4OjE4LjYwMFoiLCJ1cGRhdGVkX2F0IjoiMjAyNC0wOS0wOFQwOTo1ODoxOC42MDBaIn0sImlhdCI6MTczMjY5NDcyMiwiZXhwIjoxNzMzOTkwNzIyfQ.40iXF68ZR_HvXboGJses7jEn_yhCekg4pJapnMogvsc";

interface Item {
  id: number;
  name: string;
  description: string | null;
  quantity: number;
  price: number;
  discount: number;
  discountType: string;
}
interface ItemResponse {
  item: Item;
}
const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState<ItemResponse[]>([]);
  const [filteredData, setFilteredData] = useState<ItemResponse[]>([]);
  const navigate = useNavigate();

  const headerKeys = Object.keys(Data[0]);

  const filterByName = (name: string) => {
    const filteredData = data?.filter(({ item }: ItemResponse) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/items", {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });
      console.log({ response });
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (searchText !== "") {
      filterByName(searchText);
    } else {
      setFilteredData(filteredData);
    }
  }, [searchText]);

  const tableData = searchText ? filteredData : data;

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input
          placeholder="type name..."
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <button
          className="add-button"
          onClick={() => navigate("/products/add")}
        >
          + Add New
        </button>
      </div>
      <table className="products-table">
        <thead>
          <tr>
            {headerKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ item }: ItemResponse) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
      {tableData.length === 0 && (
        <p className="no-products-message">This product is not available!!</p>
      )}
    </div>
  );
};

export default Products;
