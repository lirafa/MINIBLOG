import styles from "./Home.module.css";
import UserGreeting from "../../components/userGreeting.js";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments.js";
import PostDetail from "../../components/PostDetail.js";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");
  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(query){
      return Navigate(`/search?q=${query}`)
    }
  };

  return (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1>Home</h1>
       <UserGreeting />
    </div>

    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>

      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.btn}>Pesquisar</button>
      </form>

     <div
  className={
    posts?.length === 1
      ? styles.post_list_single
      : styles.post_list
  }
>
  {loading && <p>Carregando...</p>}
  {posts && posts.length === 0 && (
    <div className={styles.noposts}>
      <p>Não foram encontrados posts</p>
      <Link to="/posts/create" className="btn">
        Criar primeiro post
      </Link>
    </div>
  )}
  {posts &&
    posts.map((post) => <PostDetail key={post.id} post={post} />)}
</div>
    </div>
  </div>
);
}
export default Home;