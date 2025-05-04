/**
 * InputForm
 *
 * @package components
 *
 */
import styles from "./style.module.css";

/**
 * InputForm
 * @param {*} props
 * @returns
 */

const InputForm = (props) => {
    const { inputValue, placeholder, changeText, handleKeyUp } = props;

    return (
        <input
            className={styles.inputField}
            type="text"
            value={inputValue}
            placeholder={placeholder}
            onChange={changeText}
            // handleKeyUp引数が渡されなかったらundefined
            onKeyUp={handleKeyUp ?? (() => {})}
        />
    );
};

export default InputForm;
