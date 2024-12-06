
import CustomInput from '../../Components/customInput'
import { useState } from 'react';
import { api } from '../../api';
import "./signup.css";
import { useNavigate } from 'react-router';
enum ENUM_ORGANIZATION {
    RETAIL = "retail",
    WHOLESALE = "wholesale",
  }


const NewOrganization = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState <ENUM_ORGANIZATION>(ENUM_ORGANIZATION.RETAIL);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const navigate= useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, type,address,phone);

        try{
            const response = await api.post("/organization",{
                name,
                type,
                address,
                phone,
            });
            console.log(response);
            navigate("/signup");
            // TODO: save organization_id to localstorage
            localStorage.setItem("organization_id", JSON.stringify(response.data.id))
        }
        catch (error: any) {
            console.log(error);
            setError(error.response.data.message);
          }
        }

  return (
    <div className='signup-container'>
        <form onSubmit={handleSubmit} className="signup-form">
            <h3>Step 1</h3>
            <h1 className="form-title">Create an Orgainzation</h1>
    <CustomInput label="organization name" setValue={setName} />
    <div>
            <p>Organization Type:</p>
            <div style={{ display: "flex" }}>
              <CustomInput
                type="radio"
                label="Retail"
                setValue={() => setType(ENUM_ORGANIZATION.RETAIL)}
                checked={ENUM_ORGANIZATION.RETAIL === type}
              />
              <CustomInput
                type="radio"
                label="Wholesale"
                setValue={() => setType(ENUM_ORGANIZATION.WHOLESALE)}
                checked={ENUM_ORGANIZATION.WHOLESALE === type}
              />
            </div>
          </div>
    <CustomInput label="organization address" setValue={setAddress} />
    <CustomInput label="organization phone" setValue={setPhone} />
    {error && <p className="error">{error}</p>}

    <button type="submit" className="submit-button"> Create organization</button>
    </form>
    </div>
  )
}

export default NewOrganization;