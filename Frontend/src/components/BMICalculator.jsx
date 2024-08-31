import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setheight] = useState();
  const [weight, setweight] = useState();
  const [gender, setgender] = useState();
  const [bmi, setbmi] = useState();

  const submitHandle = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please fill the all fields");
      return;
    }

    const heightInMeter = height / 100;
    const bmiResult = weight / (heightInMeter * heightInMeter);
    setbmi(bmiResult);
    
    if(bmi<18.5)
      toast.warning("You are underweight.Consider seeking advice from a healthcare provider.")
    else if(bmi>=18.5 && bmi<24.9)
      toast.success("You have normal weight.kee maintaining a healthy lifestyle.")
    else if(bmi>=25 && bmi<29.9)
      toast.warning("You are overweight.Consider seeking advice from a healthcare provider.")
    else
      toast.error("you are obese range.It is recomended to seek advce from healthcare specalist.")

  };

  return (
    <section className="bmi">
      <h1 className="bmi-title">BMI Calculator</h1>
      <div className="bmi-container">
        <div className="bmi-wrapper">
          
          <form className="bmi-form" onSubmit={submitHandle}>
            <div className="form-group">
              <label>Height (cm):</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setheight(e.target.value)}
                placeholder="Enter your height"
              />
            </div>
            <div className="form-group">
              <label>Weight (kg):</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setweight(e.target.value)}
                placeholder="Enter your weight"
              />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <select
                value={gender}
                onChange={(e) => setgender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button className="bmi-button" type="submit">
              Calculate BMI
            </button>
          </form>
        </div>
        <div className="bmi-image-wrapper">
          <img src="bmi.jpg" alt="BMI Illustration" className="bmi-image" />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
