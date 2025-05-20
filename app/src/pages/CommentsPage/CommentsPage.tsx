import { useParams } from "react-router";
import { NavLink } from "react-router";

import { useGetCommentsQuery } from "../../api/commentsApi";

import style from "./commentsPage.module.scss";

function CommentsPage() {
  const { postId } = useParams();

  if (!postId) return;

  const { data: comments, isLoading, isError } = useGetCommentsQuery(postId);

  const loading = isLoading && <div>Загрузка...</div>;
  const error = isError && <div>Ошибка при загрузке данных</div>;

  return (
    <>
      {comments && comments.length > 0 ? (
        <>
          <div className={style.comments}>
            {comments.map((comment) => {
              const { name, email, body, id } = comment;
              return (
                <div className={style.comment} key={id}>
                  <h2>{name}</h2>
                  <h3>{email}</h3>
                  <p>{body}</p>
                </div>
              );
            })}
          </div>
          <NavLink className={style.backLink} to={`/`}>
            Back...
          </NavLink>
        </>
      ) : (
        loading || error
      )}
    </>
  );
}

export default CommentsPage;
