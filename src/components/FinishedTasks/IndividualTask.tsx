import React, {FC} from "react";
import {IToDoItems as Props} from "../../App";
import {handleDelete, handleStatus} from "../../App";

interface IProps {
    toDoItems: Props["toDoItems"],
    setToDoItems: React.Dispatch<React.SetStateAction<Props["toDoItems"]>>,
    toDoItem: {
        text: string,
        date: string,
        id: number,
        done: boolean
    }
}


const IndividualTask: FC<IProps> = ({toDoItem, toDoItems, setToDoItems}) => {
    return (
        <li className={"item"}>
            <p className={"item_text"}>{toDoItem.text}</p>
            <button className={"item_restore"} onClick={() => handleStatus(toDoItem, setToDoItems, toDoItems, false)}/>
            <button className={"item_remove"} onClick={() => handleDelete(toDoItem.id, setToDoItems, toDoItems)}/>
        </li>
    )
}

export default IndividualTask;