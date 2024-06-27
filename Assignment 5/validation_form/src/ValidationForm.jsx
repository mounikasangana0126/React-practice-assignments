import { useState, useEffect } from "react";
import "./App.css";

const months = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const ValidationForm = () => {
  const [form, setForm] = useState({
    name: "",
    rollNo: "",
    panCard: "",
    dateOfBirth: "",
  });

  const [errors, setErrors] = useState({});
  const [daysFromDOB, setDaysFromDOB] = useState(null);
  const [maxDate, setMaxDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [dobaria, setDobAria] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      if (!/^[A-Za-z]*$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: "Name should contain only alphabets.",
        }));
        return;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: "",
        }));
      }
    }

    if (name === "panCard") {
      if (value.length <= 5 && !/^[A-Za-z]*$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          panCard: "First 5 characters should be alphabets only.",
        }));
        return;
      } else if (
        value.length > 5 &&
        value.length <= 9 &&
        !/^[A-Za-z]{5}[0-9]*$/.test(value)
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          panCard: "Characters 6 to 9 should be numbers only.",
        }));
        return;
      } else if (
        value.length === 10 &&
        !/^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/.test(value)
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          panCard: "Last character should be an alphabet.",
        }));
        return;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          panCard: "",
        }));
      }
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    if (name === "dateOfBirth") {
      // console.log((value.split("-")));
      // const dob_day=value.split("-")[2];
      // const dob_month=value.split("-")[1];
      // const dob_year=value.split("-")[0];
      if (! (value < maxDate) || !(value>minDate)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          dateOfBirth: `Date Of Birth should be in between ${minDate} and ${maxDate}`,
        }));
        setDobAria(true)
        return;
      } 
      calculateDaysFromDOB(value);
    }
  };

  useEffect(() => {
    let today = new Date();
    let max = new Date(today);
    max.setDate(max.getDate() - 1);
    const maxISOString = max.toISOString().split("T")[0];
    let min = new Date(today);
    min.setFullYear(min.getFullYear() - 100);
    const minISOString = min.toISOString().split("T")[0];
    setMinDate(minISOString);
    setMaxDate(maxISOString);
  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(months);
  };

  const calculateDaysFromDOB = (date) => {
    function isLeap(yearcheck) {
      return (
        (yearcheck % 4 === 0 && yearcheck % 100 !== 0) || yearcheck % 400 === 0
      );
    }

    let totalDays = 0;
    const selectedDateAndTime = new Date(date);
    const todayDateAndTime = new Date();
    const todayDate = todayDateAndTime.toISOString().split("T")[0].split("-");
    const selectedDate = selectedDateAndTime
      .toISOString()
      .split("T")[0]
      .split("-");
    const year = 0;
    const month = 1;
    const day = 2;
    const noofmonths = 12;
    const leapfeb = 29;

    if (selectedDate[year] !== todayDate[year]) {
      for (
        let yearcheck = parseInt(selectedDate[year]) + 1;
        yearcheck < parseInt(todayDate[year]);
        yearcheck++
      ) {
        if (isLeap(yearcheck)) {
          totalDays += 366;
        } else {
          totalDays += 365;
        }
      }
      let startmonth = parseInt(selectedDate[month]);
      for (
        startmonth = startmonth + 1;
        startmonth <= noofmonths;
        startmonth++
      ) {
        console.log(startmonth);
        totalDays = totalDays + months[startmonth];
        console.log(months[startmonth]);
      }
      let endmonth = parseInt(todayDate[month]);
      for (let endmonthcheck = 1; endmonthcheck < endmonth; endmonthcheck++) {
        totalDays = totalDays + months[endmonthcheck];
        console.log(months[endmonthcheck]);
      }

      totalDays =
        totalDays +
        (months[parseInt(selectedDate[month])] - parseInt(selectedDate[day])+1);

      totalDays = totalDays + parseInt(todayDate[day]);
    } else {
      if (isLeap(parseInt(selectedDate[year]))) {
        months[day] = leapfeb;
      }
      console.log("now");
      let selectedDateInteger = parseInt(selectedDate[month]);
      let todayDateInteger = parseInt(todayDate[month]);
      if (selectedDateInteger !== todayDateInteger) {
        for (
          let sameYear = selectedDateInteger + 1;
          sameYear < todayDateInteger;
          sameYear++
        ) {
          totalDays = totalDays + months[sameYear];
          console.log(totalDays);
        }
        totalDays =
          totalDays +
          (months[parseInt(selectedDate[month])] - parseInt(selectedDate[day])-1);

        totalDays = totalDays + parseInt(todayDate[day])+1;
      } else {
        totalDays = todayDate[day] - selectedDate[day];
        console.log(totalDays);
      }
    }
    setDaysFromDOB(totalDays);
    totalDays = 0;
  };

  return (
    <div className="page-container">
      <div className="container">
        <h2 className="heading">Registration Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name" className="label">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onBlur={handleChange}
              onChange={handleChange}
              required
              className="input"
              placeholder="Mounika"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="rollNo" className="label">Roll No:</label>
            <input
              type="text"
              name="rollNo"
              id="rollNo"
              value={form.rollNo}
              onChange={handleChange}
              onBlur={handleChange}
              required
              maxLength={8}
              className="input"
              placeholder="12345678"
            />
          </div>
          <div className="form-group">
            <label htmlFor="panCard" className="label">PAN Card:</label>
            <input
              type="text"
              name="panCard"
              id="panCard"
              value={form.panCard}
              onChange={handleChange}
              onBlur={handleChange}
              required
              maxLength={10}
              className="input"
              placeholder="AZNPH7488K"
            />
            {errors.panCard && <p className="error">{errors.panCard}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="dob" className="label">Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              id="dob"
              value={form.dateOfBirth}
              onChange={handleChange}
              onBlur={handleChange}
              required
              aria-invalid={dobaria}
              min={minDate}
              max={maxDate}
              className="input"
            />
            {errors.dateOfBirth && (
              <p className="error">{errors.dateOfBirth}</p>
            )}
            {daysFromDOB !== null && (
              <p className="info" data-testid="daysCount">
                Total days since date of birth: {daysFromDOB} days
              </p>
            )}
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ValidationForm;
