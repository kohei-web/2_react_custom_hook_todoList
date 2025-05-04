/**
 * AddTodo
 *
 * @package components
 *
 */

import InputForm from "../../atoms/InputForm";
import styles from "../../../commons/style.module.css";

/**
 *
 * AddTodo
 * @param {*} props
 * @return {*}
 */

const AddTodo = (props) => {
    const { originalText, handleChangeText, handleAddTodo } = props
    return (
        <>
            <h2 className={styles.commonsTodo}>{"todo追加"}</h2>
            <InputForm
                inputValue={originalText}
                placeholder={"todo追加"}
                changeText={handleChangeText}
                handleKeyUp={handleAddTodo}
            />
        </>
    )
};

export default AddTodo;
