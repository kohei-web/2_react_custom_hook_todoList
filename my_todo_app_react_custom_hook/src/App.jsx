import { useState, useMemo } from 'react'
import './App.css'
import styles from "./style.module.css"

/* todoList */
function App() {

  // 初期表示用のtodoList
  const initialTodoList = [
    {
      id: 1,
      title: "Todo1",
    },
    {
      id: 2,
      title: "Todo2",
    },
  ]

  // id管理用
  const todoLength = initialTodoList.length

  // 表示todoListの状態管理
  const [ todos, setTodos ] = useState(initialTodoList);
  // todo追加テキストの状態管理 最初は空文字
  const [ originalText, setOriginalText ] = useState("");
  // idの状態管理
  const [ todoIdLength, setTodoIdLength ] = useState(todoLength);
  // 検索テキストの状態管理
  const [ searchText, setSearchText ] = useState("");

  // todoList追加処理
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // 新しいtodoListの作成
  const createTodo = (e) => {
    // Enterがクリックかつ入力欄がからではない時にtodoを追加するようにする
    if (e.key === 'Enter' && originalText !== "") {
      // 現在のidに+1してインクリメントになるようにidを作成
      const originalId = todoIdLength + 1;

      // 追加するtodoの作成
      const todo = {
        id: originalId,
        title: originalText
      };

      // todoの追加
      addTodo(todo);

      // idの管理
      setTodoIdLength(originalId);

      // todo追加後に入力欄を空にする
      setOriginalText("");
    }
  };

  // todoList検索処理
  // フィルタリング後のtodoを返す
  // useMemoで同じ処理はスキップするようにする
  const filterTodo = useMemo(() => {
    return todos.filter((todo) => {
      // フィルタリング用の設定を作成
      const regexp = new RegExp("^" + searchText, "i");
      // todoのtitleがフィルタリングと合致したtodoのみ返す
      return todo.title.match(regexp);
    });
  }, [todos, searchText]);

  // todoList削除処理
  const handleDeleteTodo = (deleteTodo) => {
    // 渡ってきたidの合致しないtodoListを作成
    const newTodos = todos.filter((todo => todo.id !== deleteTodo.id));

    // 作成した新しいTodoListをtodoListを管理する状態関数に渡す
    setTodos(newTodos);

    // 削除処理を実行した後にmodalを非アクティブにする
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  // modalの状態管理
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  // modalに渡すtodoの状態管理
  // todoの単体のオブジェクトが来る前提なので初期値は[]ではなくnull
  const [ selectTodo, setSelectTodo ] = useState(null);

  const modalOpen = (todo) => {
    setIsModalOpen(true);
    setSelectTodo(todo);
  };

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
