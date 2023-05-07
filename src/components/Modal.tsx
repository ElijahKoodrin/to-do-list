import React, {useState, FC, useEffect} from "react";
import {IToDoItems as Props} from "../App";


interface IProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    toDoItems: Props["toDoItems"],
    setToDoItems: React.Dispatch<React.SetStateAction<Props["toDoItems"]>>,
    editOrNew: number | null
}

const Modal: FC<IProps> = ({setOpenModal, toDoItems, setToDoItems, editOrNew}) => {

    const [input, setInput] = useState({
        text: "",
        date: (new Date).toLocaleDateString("en-UK"),
        id: toDoItems.length,
        done: false
    });

    useEffect(() => {
        if (editOrNew === null) {
            return
        }
        setInput(toDoItems[editOrNew]);
    }, []);


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(
            {
                ...input,
                text: e.target.value
            }
        );
    };

    const handleSave = () => {
        if (!input.text.trim()) {
            alert("Поле нельзя оставить пустым!");
            return;
        }

        if (editOrNew === null) {
            setToDoItems([...toDoItems, {...input, text: input.text.trim()}]);
            setOpenModal(false);
        } else {
            setOpenModal(false);
            setToDoItems([
                    ...toDoItems.filter((item) => {
                        return item.id !== editOrNew;
                    }),
                    {
                        ...input, text: input.text.trim()
                    }
                ]
            );
        }
    };
    return (
        <div className={"overlay"}>
            <div className={"modal"}>
                <textarea placeholder={"Введите задачу здесь"} value={input.text} onChange={handleChange}/>
                <button className={"modal_btn"} onClick={handleSave}>Сохранить задачу</button>
                <button className={"modal_close"} onClick={() => {
                    setOpenModal(false);
                }}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default Modal;