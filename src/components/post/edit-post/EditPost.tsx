import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store";
import { editPostAction, getPostAction } from "../../../store/posts/actions";

export const EditPost = () => {
  let { postId } = useParams();
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const { dataById } = useAppSelector((state) => state.posts);

  useEffect(() => {}, []);

  useEffect(() => {
    if (postId) {
      dispath(getPostAction(+postId));
    }
  }, [dispath, postId]);

  if (!postId) {
    return <div>404</div>;
  }

  return (
    <div>
      <h1>Edit post</h1>
      <Formik
        initialValues={{
          title: dataById[+postId]?.title,
          body: dataById[+postId]?.body,
          userId: dataById[+postId]?.userId,
          id: +postId
        }}
        enableReinitialize
        onSubmit={(data) => {
          dispath(editPostAction(data)).then(() => {
            navigate("/");
          });
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <input
              name="title"
              placeholder="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <textarea
              name="body"
              placeholder="body"
              value={values.body}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "...Loading" : "Submit"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
