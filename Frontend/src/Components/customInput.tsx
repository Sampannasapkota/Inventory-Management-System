interface CustomInputProps {
    label: string,
    setValue: (value: string) => void
  }
  const CustomInput = ({ label, setValue }: CustomInputProps) => {
    // const [input, setInput] = useState<string>("");
    return (
      <div className="item">
        <label htmlFor="name">{label}</label>
        <input
          name="name"
          type="text"
          placeholder={label}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  };
  
  export default CustomInput;