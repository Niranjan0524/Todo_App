
function Container(props){

    return <div className="parentContainer">
        {props.children}
    </div>
}

export default Container;