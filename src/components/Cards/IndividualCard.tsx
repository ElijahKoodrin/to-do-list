import React, {FC, useMemo} from "react";
import {IToDoItems as Props} from "../../App";
import {handleDelete, handleStatus} from "../../App";


interface IProps {
    toDoItems: Props["toDoItems"],
    setToDoItems: React.Dispatch<React.SetStateAction<Props["toDoItems"]>>,
    setEditOrNew: React.Dispatch<React.SetStateAction<number | null>>,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    id: number
}


const IndividualCard: FC<IProps> = ({setToDoItems, setEditOrNew, setOpenModal, toDoItems, id}) => {

    const genColor = useMemo(() => {
        return "hsl(" + Math.random() * 360 + ", 100%, 77%)";
    }, []);

    return (
        <div className={"card"} style={{backgroundColor: genColor}}>
            <p className={"card_text"}>{toDoItems[id].text}</p>
            <p className={"card_date"}>{toDoItems[id].date}</p>
            <button className={"card_edit"} onClick={() => {
                setEditOrNew(id);
                setOpenModal(true)
            }}/>
            <button className={"card_done"} onClick={() => handleStatus(toDoItems[id], setToDoItems, toDoItems, true)}/>
            <button className={"card_remove"} onClick={() => {
                handleDelete(id, setToDoItems, toDoItems)
            }}/>
        </div>
    )
}

export default IndividualCard;