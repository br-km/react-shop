import React, { useContext, useState } from "react";
import bemCssModules from "bem-css-modules";

import { StoreContext } from "../../store/StoreProvider";
import CourseDetails from "./subcomponents/CourseDetails";
import CoursePopup from "./subcomponents/CoursePopup";

const AdminPanel = () => {
  const [isOpenPopup, setIsOpenpopup] = useState(false);
  const { courses } = useContext(StoreContext);

  const showPopup = () => setIsOpenpopup(true);
  const hidePopup = (event) => {
    event && event.preventDefault();
    setIsOpenpopup(false);
  };

  const coursesElements = courses.map((course) => (
    <CourseDetails key={course.id} {...course} />
  ));

  return (
    <section>
      {coursesElements}
      <button onClick={showPopup}>Dodaj nowy kurs</button>
      <CoursePopup
        isEditMode={false}
        isOpenPopup={isOpenPopup}
        hidePopup={hidePopup}
      />
    </section>
  );
};

export default AdminPanel;
