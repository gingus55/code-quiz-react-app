export const StartPage = () => {
  return (
    <section class="starting-page" id="starting-page">
      <h1>Coding Challenge</h1>
      <p>
        You have 75 seconds to answer as many questions correctly as possible.
        Good Luck!
      </p>
      <a class="button" id="start">
        Start
      </a>
      <h2>{}</h2>
      <div>
        <button> ADD questions</button>
        <button> REMOVE questions</button>
      </div>
    </section>
  );
};
