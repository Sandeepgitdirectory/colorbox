import Square from "./Square";
import Input from "./Input";
import { useState,useEffect } from "react";

// every time you create a new project you need to download an new react app by creating a new folder and typing the the command in new terminal as "npx create-react-app newFoldername"
function App() {
  const [colorValue,setcolorValue]=useState('')
  const [hexValue,sethexValue]=useState('')
  const [isDarkcolor,setisDarkcolor]=useState('')

  //use effect: it is used to track the any changes happens on the webpage.

  //the below will print each time when we make any change to the webpage.
/*   useEffect(()=>{
    console.log('render')
  }) */

  //this print only when page loads. use effect works on the basis of its dependencies.here [] is the dependency.
/*   useEffect(()=>{
    console.log('load time')
  },[]) */

  // this will print only when we update or type the color value in input field. use effect precendence of execution also depends
  //on its dependencies.
  console.log('before updating')
  useEffect(()=>{
    console.log('updating')
  },[colorValue])
  console.log('after updating')

  
  return (
    <div className="App">
    <Square 
    colorValue={colorValue}
    hexValue={hexValue}
    isDarkcolor={isDarkcolor}
    />
    <Input 
    colorValue={colorValue}
    setcolorValue={setcolorValue}
    sethexValue={sethexValue}
    isDarkcolor={isDarkcolor}
    setisDarkcolor={setisDarkcolor}
    />
    </div>
  );
}

export default App;
