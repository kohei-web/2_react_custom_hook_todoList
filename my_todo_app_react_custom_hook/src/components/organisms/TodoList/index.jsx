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
    const { showTodoList, modalOpen } = props;

    return (
        <ul>
            {showTodoList.map((todo) => {
                return (
                    <li className={styles.list} key={todo.id}>
                        <span>{todo.title}</span>
                        <ClickButton
                            buttonStyles={styles.deleteButton}
                            handleOnClick={() => modalOpen(todo)}
                            buttonText={"削除ボタン"}
                        />
                    </li>
                )
            })}
        </ul>
    )
};

export default TodoList;
