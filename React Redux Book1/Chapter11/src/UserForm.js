import React, { useState, useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getDatabase, ref, push, update, get } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";

function UserForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // replaces this.props.match.params.id
  const title = id ? "Edit User" : "New User"; // replaces the if(this.id) logic

    const [initialValues, setInitialValues] = useState({
        username: "",
        email: "",
     });

 useEffect(() => {
    if (id) {
      const db = getDatabase();
      const dbRef = ref(db, "/" + id);

      get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
          setInitialValues({
            username: snapshot.val().username,
            email: snapshot.val().email,
          });
        }
      });
    }
  }, [id]);

  return (
    <div>
      <Formik          
        enableReinitialize={true} 
        initialValues={initialValues}
        validate={(values) => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (values.email.length < 10) {
            errors.email = "Email address too short";
          }

          if (!values.username) {
            errors.username = "Required";
          } else if (values.username.length < 3) {
            errors.username = "username too short";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const db = getDatabase();
            const dbRef = ref(db, "/");

            push(dbRef, {
              username: values.username,
              email: values.email,
            }).then(() => {
              navigate("/");        // 👈 nice and simple now!
              setSubmitting(false);
            });
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1>{title}</h1>
            <Field type="email" name="email" placeholder="email" />
            <span style={{ color: "red", fontWeight: "bold" }}>
              <ErrorMessage name="email" component="div" />
            </span>
            <Field type="text" name="username"  placeholder="username" />
            <span style={{ color: "red", fontWeight: "bold" }}>
              <ErrorMessage name="username" component="div" />
            </span>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserForm;