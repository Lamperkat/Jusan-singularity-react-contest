import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import { createPostAction } from "../../../store/posts/actions";

export const NewPost = () => {
  const navigate = useNavigate();
  const dispath = useAppDispatch();

  return (
    <div>
      <h1>New post</h1>
      <Formik
        initialValues={{
          title: "",
          body: "",
          userId: 1
        }}
        onSubmit={(data) => {
          dispath(createPostAction(data)).then(() => {
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
