import React, {useState} from "react";
import "./assets/main.scss";
import Cards from "./components/Cards/Cards";
import Modal from "./components/Modal";
import Menu from "./components/FinishedTasks/Menu";


export interface IToDoItems {
    toDoItems: {
        text: string,
        date: string,
        id: number,
        done: boolean
    }[];
}


function App() {


    const [toDoItems, setToDoItems] = useState<IToDoItems["toDoItems"]>(
        [
            {
                text: "Нулевой",
                date: "04/05/2023",
                id: 0,
                done: false
            },
            {
                text: "Первый",
                date: "05/05/2023",
                id: 1,
                done: true
            },
            {
                text: "Второй",
                date: "06/05/2023",
                id: 2,
                done: true
            }
        ]
    );


    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const [editOrNew, setEditOrNew] = useState<number | null>(null);
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={"App container"}>
            <header>
                <button className={"header"} onClick={() => setOpenMenu(!openMenu)}>{openMenu}Задачи</button>
                {openMenu &&
                    <Menu setOpenMenu={setOpenMenu} toDoItems={toDoItems} setToDoItems={setToDoItems}/>}
                <button className={"add"} onClick={() => {
                    setEditOrNew(null);
                    setOpenModal(true);
                }}/>
            </header>
            <Cards toDoItems={toDoItems} setToDoItems={setToDoItems} setEditOrNew={setEditOrNew}
                   setOpenModal={setOpenModal}/>
            {openModal &&
                <Modal setOpenModal={setOpenModal} toDoItems={toDoItems}
                       setToDoItems={setToDoItems}
                       editOrNew={editOrNew}/>}
        </div>
    );
}

export default App;

const filterObjects = (id: number, toDoItems: IToDoItems["toDoItems"]) => {
    return toDoItems.filter((item) => {
        return item.id !== id;
    })
}

export const handleDelete = (id: number, setToDoItems: React.Dispatch<React.SetStateAction<IToDoItems["toDoItems"]>>, toDoItems: IToDoItems["toDoItems"]) => {
    setToDoItems(
        filterObjects(id, toDoItems).map((item, index) => {
            return {
                ...item,
                id: index
            }
        })
    )
}

export const handleStatus = (toDoItem: IToDoItems["toDoItems"][0], setToDoItems: React.Dispatch<React.SetStateAction<IToDoItems["toDoItems"]>>, toDoItems: IToDoItems["toDoItems"], done: boolean) => {
    setToDoItems([
        ...filterObjects(toDoItem.id, toDoItems),
        {...toDoItem, done: done}
    ])
}
