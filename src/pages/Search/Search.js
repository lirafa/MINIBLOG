import styles from "./Search.module.css";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import PostDetail from "../../components/PostDetail";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className="tudo">
        <Link to="/" className="btn1">
              <FaArrowLeftLong />
            </Link>
    <div className={styles.search_container}>
        
      <h1>Resultados encontrados para: {search}</h1>
      
        {posts && posts.length === 0 && (
          <>
            <p className="p_form">Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn1">
              Voltar
            </Link>
          </>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
    </div>
    </div>
  );
};

export default Search;