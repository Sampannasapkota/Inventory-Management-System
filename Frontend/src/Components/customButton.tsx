interface CustomButtonProps {
    label: string;
    onClick ?: () => void;
    style?: object;
    type?: "button" | "submit"| "reset" ,
  }
  
  const CustomButton = ({ label, onClick, style, type="button" }: CustomButtonProps) => {
    return (
      <button type={type} style={style} onClick={onClick}>{label}</button>
    );
  }
  
  export default CustomButton;