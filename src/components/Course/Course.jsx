import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";
import { useNavigate } from "react-router-dom";

import { default as CourseStyles } from "./Course.module.scss";
import request from "../../helpers/request";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModules(CourseStyles);

const Course = ({ authors, id, isUserContext = false, img, price, title }) => {
  const { user, setUser } = useContext(StoreContext);

  const isUserLogged = Boolean(user);

  const navigate = useNavigate();

  const allAuthors = authors.join(", ");

  const handleOnClick = async () => {
    try {
      const { data, status } = await request.patch("/users", {
        login: user.login,
        courseId: id,
      });
      if (status === 202) {
        setUser(data.user);
        navigate("/my-courses");
      }
    } catch (error) {
      console.warn(error);
    }
  };
  const shouldBeBuyButtonVisible = isUserLogged && !isUserContext;

  return (
    <article className={style()}>
      <h3 className={style("title")}>{title}</h3>
      <img src={img} alt={title} className={style("image")} />
      <p className={style("price")}>{`Koszt kursu: ${price}zł`}</p>
      <p className={style("authors")}>{`Autorzy kursu: ${allAuthors}`}</p>
      <div className={style("button-container")}>
        {shouldBeBuyButtonVisible && (
          <button onClick={handleOnClick}>Zakup ten kurs</button>
        )}
      </div>
    </article>
  );
};

export default Course;
