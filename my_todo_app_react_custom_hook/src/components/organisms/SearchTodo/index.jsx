/**
 * SearchTodo
 *
 * @package components
 *
 */


import InputForm from "../../atoms/InputForm";
import styles from "../../../commons/style.module.css";

/**
 *
 *
 * @param {*} props
 * @return {*}
 */

const SearchTodo = (props) => {
    const { searchText, handleChangeSearchText } = props;

    return(
        <>
            <h2 className={styles.commonsTodo}>{"todo検索"}</h2>
            <InputForm
                inputValue={searchText}
                placeholder={"todoを検索"}
                changeText={handleChangeSearchText}
            />
        </>
    )
};

export default SearchTodo;
