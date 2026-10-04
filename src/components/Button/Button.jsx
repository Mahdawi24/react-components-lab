import './Button.css'

function handelClick(){
    console.log('Button Clicked')
}

const Button = () => {
  return <p onClick={handelClick}>Upload</p>
}
export default Button