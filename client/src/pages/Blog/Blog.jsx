import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  return (
    <div>
      <h1>This is Blog Entry: {id}</h1>
    </div>
  );
}

export default Blog;
