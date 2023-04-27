import './caard.css'
function Caard({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : ""
if (item.stat === ""){
    return (
        <div className={"caard active"} onClick={() => handleClick(id)}>
            <img src='/img/back.png' alt="" />
        </div>
    )
}
    else {
        return (
        <div className={"caard" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}
}

export default Caard