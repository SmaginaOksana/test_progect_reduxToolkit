import { NavLink } from "react-router";

import { useGetPostsQuery } from "../../api/postsApi";

import style from "./homePage.module.scss";

function HomePage() {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  const loading = isLoading && <div>Загрузка...</div>;
  const error = isError && <div>Ошибка при загрузке данных</div>;

  return (
    <>
      {posts && posts.length > 0 ? (
        <div className={style.posts}>
          {posts.map((post) => {
            const { title, id } = post;
            return (
              <div className={style.post} key={id}>
                <div className={style.grayBackground}></div>
                <h2>{title}</h2>
                <NavLink to={`posts/${id}`}>Description...</NavLink>
              </div>
            );
          })}
        </div>
      ) : (
        loading || error
      )}
    </>
  );
}

export default HomePage;
