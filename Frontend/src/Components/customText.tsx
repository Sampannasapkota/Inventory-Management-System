interface CustomTextProps {
    content: string;
    color?: string;
    size?: string;
  }
  
  const CustomText = ({ content, color="gray", size="16px" }: CustomTextProps) => {
    return (
      <p style={{ color: color, fontSize: size }}>{content}</p>
    );
  }
  
  export default CustomText;