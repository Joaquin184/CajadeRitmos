import './App.css';
import { AudioClip } from './types'
import Ritmos from './Ritmos';

const audioClips: AudioClip [] = [
  {
    KeyTrigger: "Q",
    url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    KeyTrigger: "W",
    url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    description: "Heater 2", 
  },
  {
    KeyTrigger: "E",
    url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    description: "Heater 3", 
  },
  {
    KeyTrigger: "A",
    url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    description: "Heater 4", 
  },
  {
    KeyTrigger: "S",
    url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    description: "Clap", 
  },
  {
    KeyTrigger: "D",
    url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    description: "Open HH", 
  },
  {
    KeyTrigger: "Z",
    url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    description: "Kick 'n Hat", 
  },
  {
    KeyTrigger: "X",
    url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    description: "Kick", 
  },
  {
    KeyTrigger: "C",
    url:"https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    description: "Closed HH", 
  },
]

function App() {

   const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip  = audioClips.find(
      (clip) => clip.KeyTrigger === e.key.toUpperCase()
    );
    if (!clip) return;
          (document.getElementById(clip.KeyTrigger) as HTMLAudioElement)
          .play()
          .catch(console.error);
  

          document.getElementById("drum-" + clip.KeyTrigger)?.focus();
          document.getElementById("display")!.innerText = clip.description;
    };

  return (
    <div className="container" id="drum-machine" onKeyDown={playAudio}>
      <h1>Caja de Ritmos</h1>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <Ritmos audioClip={clip} key={clip.KeyTrigger}/>
        ))}
      </div>
      <div id="display"></div>
      <div>
            <p>Joaquin Iglesias😎</p>
          </div>
    </div>
  );
  
}

export default App;
