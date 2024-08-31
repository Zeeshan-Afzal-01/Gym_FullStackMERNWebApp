import React from "react";


const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="content">
        <div className="image">
          <img src="/img5.jpg" alt="workout" />
        </div>
        <div className="text">
          <h1>TOP WORKOUT SESSION</h1>
          <p>
            Elevate your fitness routine with our top-rated workout sessions. Designed to challenge and inspire, these sessions cater to all fitness levels.
          </p>
          <div className="bootcamps">
            <div className="bootcamp">
              <h4>High-Intensity Interval Training (HIIT)</h4>
              <p>
                Experience a dynamic workout that combines high-intensity exercises with short recovery periods to boost endurance and burn fat.
              </p>
            </div>
            <div className="bootcamp">
              <h4>Strength Training</h4>
              <p>
                Build muscle and strength with our comprehensive strength training programs. Perfect for both beginners and advanced lifters.
              </p>
            </div>
            <div className="bootcamp">
              <h4>Yoga and Flexibility</h4>
              <p>
                Improve your flexibility and balance with our yoga sessions, suitable for all levels. Enhance your overall wellness and relaxation.
              </p>
            </div>
            <div className="bootcamp">
              <h4>Cardio Kickboxing</h4>
              <p>
                Get your heart pumping with our cardio kickboxing classes. A fun, high-energy workout that helps with fitness and stress relief.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
