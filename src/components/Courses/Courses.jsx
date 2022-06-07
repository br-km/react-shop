import React, { useContext, useEffect } from "react";
import bemCssModules from "bem-css-modules";

import { default as CoursesStyles } from "./Courses.module.scss";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModules(CoursesStyles);

import Course from "./subcomponents/Course";

const Courses = () => {
  const { courses } = useContext(StoreContext);

  const coursesElements = courses.map((course) => (
    <Course key={course.id} {...course} />
  ));

  return (
    <section className={style()}>
      <h2 className={style("title")}>Dostępne kursy:</h2>
      <ul className={style("list")}>{coursesElements}</ul>
    </section>
  );
};

export default Courses;
