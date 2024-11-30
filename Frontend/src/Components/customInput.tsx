interface CustomInputProps {
    label: string,
    setValue: (value: string) => void,
    type?: string,
    checked? : boolean,
  }
  const CustomInput = ({ label, setValue, type="text", checked }: CustomInputProps) => {
    // const [input, setInput] = useState<string>("");
    return (
      <div className="item">
        <label htmlFor="name">{label}</label>
        <input
        required
          name="name"
          type={type}
          checked={checked}
          placeholder={label}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  };
  
  export default CustomInput;