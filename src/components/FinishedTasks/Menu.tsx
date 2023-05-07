import React, {FC, MouseEvent} from 'react';
import IndividualTask from "./IndividualTask";
import {IToDoItems as Props} from "../../App";

interface IProps {
    toDoItems: Props["toDoItems"],
    setToDoItems: React.Dispatch<React.SetStateAction<Props["toDoItems"]>>,
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu: FC<IProps> = ({setOpenMenu, toDoItems, setToDoItems}) => {

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target == document.querySelector('.overlay')) {
            setOpenMenu(false)
        }
    }

    return (
        <div className={"overlay"} onClick={handleClick}>
            <div className={"dropdown-menu modal"}>
                <h2>Завершённые задачи</h2>
                <ul>
                    {
                        toDoItems.sort((a, b) => a.id - b.id).map((item) =>
                            item.done &&
                            <IndividualTask toDoItem={item} toDoItems={toDoItems} setToDoItems={setToDoItems}
                                            key={item.id}/>
                        )
                    }

                </ul>
            </div>
        </div>
    )
}

export default Menu;