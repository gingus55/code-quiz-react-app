export const QuestionPage = (props) => {
  // console.log(props);
  return (
    <section class="question-page" id="question-page">
      <h2>{props.question}</h2>
      <ul class="questions" id="questions" data-answer={props.answer}>
        {props.decoy.map(
          (each) =>
            `<li>
         <a class="response-button" id="API" data-log="${each}">
           ${each}
         </a>
       </li>`
        )}
      </ul>
    </section>
  );
};
