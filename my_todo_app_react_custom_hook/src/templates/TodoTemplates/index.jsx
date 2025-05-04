/**
 * TodoTemplate
 *
 * @package components
 *
 */

import AddTodo from "../../components/organisms/AddTodo";
import SearchTodo from "../../components/organisms/SearchTodo";
import TodoList from "../../components/organisms/TodoList";
import DeleteTodoModal from "../../components/organisms/DeleteTodoModal";
import useTodo from "../../hooks/useTodo";

const TodoTemplate = () => {
    const [
        {
            showTodoList,
            originalText,
            searchText,
            isModal
        },
        {
            handleSetOriginalText,
            modalOpen,
            createTodo,
            handleSetSearchText,
            handleTodoDelete,
            handleSetIsModal
        }
    ] = useTodo();

    return (
        <div>
            {/* todoListの追加 */}
            <AddTodo
                originalText={originalText}
                handleChangeText={handleSetOriginalText}
                handleAddTodo={createTodo}
            />
            {/* todoListの検索 */}
            <SearchTodo
                searchText={searchText}
                handleChangeSearchText={handleSetSearchText}
            />
            {/* todoListの表示 */}
            <TodoList
                showTodoList={showTodoList}
                modalOpen={modalOpen}
            />
            {/* todoList削除時のmodal */}
            <DeleteTodoModal
                isModalOpen={isModal}
                handleTodoDelete={handleTodoDelete}
                handleSetIsModal={handleSetIsModal}
            />
        </div>
    )
};

export default TodoTemplate;
