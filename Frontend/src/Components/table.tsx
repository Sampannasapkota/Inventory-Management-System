import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Data from "../data.json";
import "./table.css"

const Table = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(Data);

  const headerKeys = Object.keys(Data[0]);

  const filterByName = (name: string) => {
    // filter Data by name
    const filteredData = Data.filter(
      (item) => item.name.toLowerCase() == name.toLowerCase()
    );
    setFilteredData(filteredData);
    return filteredData;
  };

  // filter data by name on search text change
  useEffect(() => {
    if (searchText !== "") {
      filterByName(searchText);
    } else {
      setFilteredData(Data);
    }
  }, [searchText]);

  // filterByName("marker");

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h1>Products</h1>
      <div className="search-container">
      
        <Search width={16} height={16} className="icon search" />
        <input
          placeholder="type name..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {/* <button style={{ marginLeft: 16, padding: "4px 16px"}} onClick={() => filterByName(searchText)}>Search</button> */}
      </div>
      <table style={{border: "1px solid black"}}>
        <thead>
          <tr>
            {headerKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
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
      {filteredData.length === 0 && (
        <p style={{ width: "100%", textAlign: "center" }}>
          This product is not available!!
        </p>
      )}
    </div>
  );
};

export default Table;