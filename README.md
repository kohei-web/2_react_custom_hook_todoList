# 2_react_custom_hook_todoList

思考整理
前方一致の検索機能→検索欄
todoListの表示
todoListの追加機能→追加用のテキスト入力欄→todoListの初期表示としてtodoListを作成
todoListの削除機能
→実装完了

4/28 カスタムフック化
components/atoms
components/organisms
data/  jsxの記述を書いてないものは.jsファイル作成
hooks/  jsxの記述を書いてないものは.jsファイル作成
templates organismsの集合体
pages page自体を呼び出して表示させる

作業タスク整理
共通コンポーネントとしてinputFormの作成

inputFormを親として検索テキスト入力欄とTodoList入力欄のコンポーネントを作成
大きめのコンポーネントとしてTodoList追加とmodalのコンポーネントを作成

ここまで済

hooksのuseTodoで返すのに必要な値を策定していく

TodoTemplateを作成する

todoListの動作確認を行う
→動くのは確認済み
