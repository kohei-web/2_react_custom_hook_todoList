import { useState, useMemo } from 'react'
import { initialTodoList, todoLength } from "../constants/data";


const useTodo = () => {
    // 表示todoListの状態管理
    const [ todos, setTodos ] = useState(initialTodoList);
    // todo追加テキストの状態管理 最初は空文字
    const [ originalText, setOriginalText ] = useState("");
    // idの状態管理
    const [ todoIdLength, setTodoIdLength ] = useState(todoLength);
    // 検索テキストの状態管理
    const [ searchText, setSearchText ] = useState("");
    // modalの状態管理
    const [ isModal, setIsModal ] = useState(false);
    // modalに渡すtodoの状態管理
    // todoの単体のオブジェクトが来る前提なので初期値は[]ではなくnull
    const [ selectTodo, setSelectTodo ] = useState(null);

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

    // 入力されたtodo追加テキストの状態管理ハンドラ
    const handleSetOriginalText = (e) => setOriginalText(e.target.value);
    // 入力された検索テキストの状態管理ハンドラ
    const handleSetSearchText = (e) => setSearchText(e.target.value);
    // modalの状態管理ハンドラ
    const handleSetIsModal = () => setIsModal(false);

    // todoList検索処理
    // フィルタリング後のtodoを返す
    // useMemoで同じ処理はスキップするようにする
    const showTodoList = useMemo(() => {
        return todos.filter((todo) => {
            // フィルタリング用の設定を作成
            const regexp = new RegExp("^" + searchText, "i");
            // todoのtitleがフィルタリングと合致したtodoのみ返す
            return todo.title.match(regexp);
        });
    }, [todos, searchText]);

    // todoList削除処理
    const handleTodoDelete = () => {
        // 渡ってきたidの合致しないtodoListを作成
        const newTodos = todos.filter((todo => todo.id !== selectTodo.id));

        // 作成した新しいTodoListをtodoListを管理する状態関数に渡す
        setTodos(newTodos);

        // 削除処理を実行した後にmodalを非アクティブにする
        if (isModal) {
            setIsModal(false);
        }
    };

    // modalの状態管理
    const modalOpen = (todo) => {
        setIsModal(true);
        setSelectTodo(todo);
    };

    // 状態管理を辞書型に定義
    const states = {
        showTodoList,
        originalText,
        searchText,
        isModal
    };

    // イベントハンドラを辞書型に定義
    const actions = {
        handleSetOriginalText,
        modalOpen,
        createTodo,
        handleSetSearchText,
        handleTodoDelete,
        handleSetIsModal
    };

    return [ states, actions ]

}

export default useTodo;
