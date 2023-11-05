import { useParams } from "react-router-dom";

function EditBlog() {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit Blog id: {id}</h1>
    </div>
  );
}

export default EditBlog;
