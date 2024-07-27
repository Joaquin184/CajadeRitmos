import { AudioClip } from "./types";

interface RitmosProps {
    audioClip: AudioClip;
}

const Ritmos = ({audioClip}: RitmosProps) => {
  const playSound = (clip: AudioClip) => {
        (document.getElementById(clip.KeyTrigger) as HTMLAudioElement)
        .play()
        .catch(console.error);

        document.getElementById("display")!.innerText = clip.description;
  };


  return (
   <button
   className="drum-pad"
   id={`drum-${audioClip.KeyTrigger}`}
   onClick={() => playSound(audioClip)}
   >
    <audio src={audioClip.url} id={audioClip.KeyTrigger}className="clip" />
    {audioClip.KeyTrigger}
    </button>
  );
};

export default Ritmos;
