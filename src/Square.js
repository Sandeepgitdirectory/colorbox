
const Square = ({colorValue,hexValue,isDarkcolor}) => {
  return (
    <section className='square' style={{
        background: colorValue,
        color:isDarkcolor?'#000':'#fff'
        }}>
        <p>{colorValue?colorValue:"Empty Value"}</p>
        <p>{hexValue?hexValue:null}</p>
    </section>
  )
}

// this represent the default value present whenever the  site is loaded for the first time.
Square.defaultProps={
    colorValue:"Empty color value"
}

export default Square