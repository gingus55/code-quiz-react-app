export const Header = () => {
  return (
    <header class="on-screen">
      <div>
        <a href="./highscores.html">Highscores</a>
      </div>
      <div id="timer">
        Time Remaining: <span id="countdown"></span>
      </div>
    </header>
  );
};
