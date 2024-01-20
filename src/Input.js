
import colorNames from 'colornames';
//e.preventDefault is used prevent the default loading of the webpage content whenever any change is 
//made to the webpage
const Input = ({colorValue,setcolorValue,sethexValue,isDarkcolor,setisDarkcolor}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
     <label> Add color </label>
     <input 
     autoFocus
     type='text'
     placeholder='Add color name'
     required
     value={colorValue}
     onChange={(e)=>{
        setcolorValue(e.target.value)
        sethexValue(colorNames(e.target.value))
    }}
     />
     <button
     type='button'
     onClick={()=>setisDarkcolor(!isDarkcolor)}
     >
        Toggle text button
     </button>
    </form>
  )
}
// changes have been made
export default Input