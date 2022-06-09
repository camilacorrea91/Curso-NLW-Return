import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

//se a foto está sendo tirada mostra componente de loading 
//{ isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" /> }

interface ScreenshotButtonProps {
  screenshot : String | null;
  onScreenshotTook : (screenshot : string | null) => void;
}


export function ScreenshotButton ({
  screenshot, 
  onScreenshotTook 
}: ScreenshotButtonProps){
  //estado - enquanto a foto estiver sendo tirada, mostra um sinal de loading
  const [isTakingScreenshot, setIsTankingScreenshot] = useState(false);

  async function handleTakeScreenshot(){
    setIsTankingScreenshot(true);
    //print da página
    const canvas = await html2canvas(document.querySelector('html')!);
    //onverte o print para png 
    //base64image - representação em texto que transforma em uma img
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image);
    setIsTankingScreenshot(false);
  }

  if (screenshot) {
    return(
      <button type="button" 
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}>
        <Trash weight="fill" />
      </button>
    ); 
  }
  return (
    <button type="button" onClick={handleTakeScreenshot} 
    className="p-2 bg-zinc-800 rounded-mb border-transparent hover:zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
      { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" /> }
    </button>
  )
}