import { useParams } from "react-router";
export default function ProductDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  );
}