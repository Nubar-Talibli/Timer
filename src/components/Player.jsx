import { useRef, useState } from "react";

export default function Player() {

  const player = useRef();
  const [name, setName] = useState('')

  function showName() {
    setName(player.current.value)
    player.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {name?name:"unknown entity"}</h2>
      <p>
        <input type="text" ref={player}/>
        <button onClick={showName}>Set Name</button>
      </p>
    </section>
  );
}
