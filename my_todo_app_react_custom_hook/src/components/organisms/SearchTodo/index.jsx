/**
 * SearchTodo
 *
 * @package components
 *
 */


import InputForm from "../../atoms/InputForm";

/**
 *
 *
 * @param {*} props
 * @return {*}
 */

const SearchTodo = (props) => {
    const { inputValue, changeText } = props;

    return(
        <>
            <h2 className={styles.searchTodo}>{"todo検索"}</h2>
            <InputForm
                inputValue={inputValue}
                placeholder={"todoを検索"}
                changeText={changeText}
            />
        </>
    )
};

export default SearchTodo;
