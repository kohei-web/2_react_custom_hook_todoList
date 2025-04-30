
import './App.css'
import styles from "./style.module.css"

/* todoList */
function App() {





  return (
    <>
      <div>
        {/* todo追加 */}
        <input
          className={styles.inputField}
          type="text"
          value={originalText}
          placeholder='todoを追加'
          // 入力されたテキストを取得管理
          onChange={(e) => setOriginalText(e.target.value)}
          // EnterがkeyUpした時にtodoList追加処理を実行する
          onKeyUp={createTodo}
        />

        {/* todo検索 */}
        <input
          className={styles.inputField}
          type="text"
          value={searchText}
          placeholder='todoの検索'
          // 入力されたテキストを取得管理
          onChange={(e) => setSearchText(e.target.value)}
        />

        <ul>
          {filterTodo.map((todo) => {
            return (
              <li className={styles.list} key={todo.id}>
                <span>{todo.title}</span>
                <button
                  className={styles.delete__button}
                  onClick={() => modalOpen(todo)}
                >
                  削除ボタン
                </button>
              </li>
            )
          })}
        </ul>
        {/* 削除時に表示させるmodal */}
        {/* 関数(文)ではなく式を返すからreturnはいらない */}
        {isModalOpen && (
          <div className={styles.delete_modal}>
            <p
              className={`${styles.confirm} ${styles.modal_font_color}`}
            >
              本当に削除しますか?
            </p>
            {/* クリック時に削除処理を実行 */}
            <button
              className={`${styles.modal_yes_button} ${styles.modal_font_color}`}
              onClick={() => handleDeleteTodo(selectTodo)}
            >
              はい
            </button>
            {/* クリック時にmodalを非アクティブにする */}
            <button
              className={`${styles.modal_no_button} ${styles.modal_font_color}`}
              onClick={() => setIsModalOpen(false)}
            >
              いいえ
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default App
