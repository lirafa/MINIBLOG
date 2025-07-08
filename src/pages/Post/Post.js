import styles from "./Post.module.css";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  return (
    <div className="tudo">
      <Link to="/" className="btn1">
        <FaArrowLeftLong />
      </Link>
      <div className={styles.post_container}>
        {post && (
          <>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p className={styles.p}>{post.body}</p>
            <h3>Este post trata sobre:</h3>
            <div className={styles.tags}>
              {post.tagsArray.map((tag) => (
                <p key={tag}>
                  <span>#</span>
                  {tag}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
