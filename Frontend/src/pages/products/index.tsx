import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Data from "../../data.json";
import { useNavigate } from "react-router";
import "./productList.css";
import axios from "axios";

const AUTH_TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZV9pZCI6MSwib3JnYW5pemF0aW9uX2lkIjoyLCJuYW1lIjoiQmlrcmFtIiwiZW1haWwiOiJoZW9AZ21haWwuY29tIiwibW9iaWxlIjoiOTAwMDAiLCJwYXNzd29yZCI6Imhlcm8xMjMiLCJjcmVhdGVkX2F0IjoiMjAyNC0wOS0wOVQwOTo1MDowMS41MTVaIiwidXBkYXRlZF9hdCI6IjIwMjQtMTItMTBUMTU6NTk6NDAuNjI3WiIsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJLdW1teSBSb2xlIn0sIm9yZ2FuaXphdGlvbiI6eyJpZCI6MiwibmFtZSI6IlB1bnlhbSIsImFkZHJlc3MiOiJJdGFoYXJpIiwidHlwZSI6InJldGFpbCIsInBob25lIjoiOTgwMDAwMDAiLCJjcmVhdGVkX2F0IjoiMjAyNC0wOS0wOFQwOTo1ODoxOC42MDBaIiwidXBkYXRlZF9hdCI6IjIwMjQtMDktMDhUMDk6NTg6MTguNjAwWiJ9LCJpYXQiOjE3MzM4NDY1MTgsImV4cCI6MTczNTE0MjUxOH0.6PDymf9OfW6dwFeMLTq8vkCpz8IY0Efp0RkB5GlzlPA";
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
