/**
 * TodoList
 *
 * @package components
 *
 */

import ClickButton from "../../atoms/ClickButton";
import styles from "./style.module.css";

/**
 *
 * @param {*} props
 * @return {*}
 *
 */

const TodoList = (props) => {
    const { todoList, handleOnClick } = props;

    return (
        <ul>
            {todoList.map((todo) => {
                <li className={styles.list} key={todo.id}>
                    <span>{todo.title}</span>
                    <ClickButton
                        buttonStyles={styles.deleteButton}
                        onClick={handleOnClick}
                        buttonText={"削除ボタン"}
                    />
                </li>
            })}
        </ul>
    )
};

export default TodoList;
