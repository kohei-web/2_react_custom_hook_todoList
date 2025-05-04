/**
 * ClickButton
 *
 * @package components
 *
 */

/**
 *
 *
 * @param {*} props
 * returns
 */
const ClickButton = (props) => {
    const { buttonStyles, handleOnClick, buttonText } = props

    return (
        <button
            className={buttonStyles}
            onClick={handleOnClick}
        >
            {buttonText}
        </button>
    )
};

export default ClickButton;
