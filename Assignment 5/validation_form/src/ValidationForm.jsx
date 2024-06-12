import { useState, useEffect } from "react";
import "./App.css";

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
  };

  const calculateDaysFromDOB = (date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    const timeDiff = today.getTime() - selectedDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    setDaysFromDOB(daysDiff);
  };

  return (
    <div className="page-container">
      <div className="container">
        <h2 className="heading">Registration Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="label">Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="input"
              placeholder="Mounika"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label className="label">Roll No:</label>
            <input
              type="text"
              name="rollNo"
              value={form.rollNo}
              onChange={handleChange}
              required
              maxLength={8}
              className="input"
              placeholder="12345678"
            />
          </div>
          <div className="form-group">
            <label className="label">PAN Card:</label>
            <input
              type="text"
              name="panCard"
              value={form.panCard}
              onChange={handleChange}
              required
              maxLength={10}
              className="input"
              placeholder="AZNPH7488K"
            />
            {errors.panCard && <p className="error">{errors.panCard}</p>}
          </div>
          <div className="form-group">
            <label className="label">Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
              required
              min={minDate}
              max={maxDate}
              className="input"
            />
            {errors.dateOfBirth && (
              <p className="error">{errors.dateOfBirth}</p>
            )}
            {daysFromDOB !== null && (
              <p className="info">
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
