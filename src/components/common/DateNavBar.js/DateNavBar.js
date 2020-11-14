import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCalendar,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateNavBar = ({
  children,
  startDate,
  displayHome = false,
  onDateChange,
}) => {
  const [date, setDate] = useState(new Date(startDate));
  const CustomInput = ({ onClick }) => (
    <button className="button is-white" onClick={onClick}>
      <FontAwesomeIcon className="icon" icon={faCalendar} />
    </button>
  );

  useEffect(() => {
    setDate(new Date(startDate));
  }, [startDate]);

  const handleDateChange = (d) => {
    setDate(new Date(d));
    onDateChange(moment(d));
  };

  const handlePrevDay = () => {
    const previusDay = moment(date).subtract(1, "days");
    handleDateChange(previusDay);
  };

  const handleNextDay = () => {
    const nextDay = moment(date).add(1, "days");
    handleDateChange(nextDay);
  };

  const handleBackToToday = () => {
    handleDateChange(moment());
  };

  return (
    <>
      <div className="level is-mobile mt-2 mb-2">
        <div className="level-left">
          <span className="level-item mx-0">
            <button className="button is-white" onClick={handlePrevDay}>
              <FontAwesomeIcon className="icon" icon={faArrowLeft} />
            </button>
          </span>
          <span className="level-item mx-0">
            <button className="button is-white" onClick={handleNextDay}>
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </button>
          </span>
          <>
            {displayHome ? (
              <span className="level-item mx-0">
                <button className="button is-white" onClick={handleBackToToday}>
                  <FontAwesomeIcon className="icon" icon={faHome} />
                </button>
              </span>
            ) : null}
          </>
          <span className="level-item">
            <DatePicker
              selected={date}
              onChange={(d) => handleDateChange(d)}
              customInput={<CustomInput />}
            />
          </span>
        </div>
        <div className="level-right">
          <span className="title is-3 is-capitalized ml-5">{children}</span>
        </div>
      </div>
    </>
  );
};

export default DateNavBar;

DateNavBar.propTypes = {
  children: PropTypes.element,
  startDate: PropTypes.any,
  onDateChange: PropTypes.func,
};
