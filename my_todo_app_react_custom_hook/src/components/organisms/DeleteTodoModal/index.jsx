/**
 * DeleteTodoModal
 *
 * @package components
 *
 */

import ClickButton from "../../atoms/ClickButton";
import styles from "./style.module.css";

/**
 *
 *
 * @param {*} props
 * @return {*}
 */

const DeleteTodoModal = (props) => {
    const { isModalOpen, handleOnClick, handleSetIsModalOpen } = props;

    return (
        <>
            {isModalOpen && (
                <div className={styles.deleteModal}>
                    <p
                        className={
                            `${styles.confirm} ${styles.modal_font_color}`
                        }
                    >
                        本当に削除しますか？
                    </p>
                    <ClickButton
                        buttonStyle={
                            `${styles.modal_yes_button} ${styles.modal_font_color}`
                        }
                        handleOnClick={handleOnClick}
                        buttonText={"はい"}
                    />
                    <ClickButton
                        buttonStyle={
                            `${styles.modal_no_button} ${styles.modal_font_color}`
                        }
                        handleOnClick={handleSetIsModalOpen}
                        buttonText={"いいえ"}
                    />
                </div>
            )}
        </>
    )
};

export default DeleteTodoModal;
