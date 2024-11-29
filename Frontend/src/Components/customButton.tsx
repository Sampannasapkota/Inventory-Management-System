interface CustomButtonProps {
    label: string;
    onClick: () => void;
    style?: object;
  }
  
  const CustomButton = ({ label, onClick, style }: CustomButtonProps) => {
    return (
      <button style={style} onClick={onClick}>{label}</button>
    );
  }
  
  export default CustomButton;