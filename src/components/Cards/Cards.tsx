import React, {FC} from "react";
import {IToDoItems as Props} from "../../App";
import IndividualCard from "./IndividualCard";

interface IProps {
    toDoItems: Props["toDoItems"],
    setToDoItems: React.Dispatch<React.SetStateAction<Props["toDoItems"]>>,
    setEditOrNew: React.Dispatch<React.SetStateAction<number | null>>,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}


const Cards: FC<IProps> = ({toDoItems, setToDoItems, setEditOrNew, setOpenModal}) => {


    return (
        <div className={"cards"}>
            {toDoItems.sort((a, b) => a.id - b.id)?.map((toDoItem) =>

                (!toDoItem.done) && <IndividualCard setToDoItems={setToDoItems} setEditOrNew={setEditOrNew}
                                                    setOpenModal={setOpenModal} toDoItems={toDoItems}
                                                    key={toDoItem.id} id={toDoItem.id}/>
            )}
        </div>
    );
};

export default Cards;