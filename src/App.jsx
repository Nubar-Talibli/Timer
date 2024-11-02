import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title={"Easy"} targetTime={2}></Timer>
        <Timer title={"Medium"} targetTime={3}></Timer>
        <Timer title={"Hard"} targetTime={4}></Timer>
        <Timer title={"Pro"} targetTime={5}></Timer>
      </div>
    </>
  );
}

export default App;
