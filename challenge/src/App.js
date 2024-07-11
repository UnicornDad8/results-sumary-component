import "./index.css";

function App() {
  return (
    <main>
      <div className="main-container">
        <section className="gradient-bg result-box left">
          <div className="result-container">
            <h3>Your Result</h3>
            <h2>Great</h2>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </section>
        <section className="summary right">
          <div className="sumary-container">
            <h3>Summary</h3>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
