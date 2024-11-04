function SayHello(props){
    // const name = "Simon"
    const myStyle = {
        color: 'red',
        backgroundColor: 'yellow'
    }
    return(
        <h1 style={myStyle}>Hello {props.fname}{props.lname}</h1>
    )
}
export default SayHello;