import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IonList, IonItem, IonLabel, IonCheckbox, IonButton, IonInput } from '@ionic/react';
import { RootState } from '../../store';
import { addTodo, toggleTodo, removeTodo, Todo } from "../../store/slices/todoSlice"

export const TodoSubscriber = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);

    return <>
        <h2>Live Todo List updates</h2>
        <p>Read-only subscription usable in other pages and blocks</p>
        <IonList>
            {todos.length === 0 && <IonItem>
                <h3>Todo list is empty</h3>
            </IonItem>}
            {todos.map((todo) => (
                <IonItem key={todo.id}>
                    <IonLabel>{todo.text}</IonLabel>
                </IonItem>
            ))}
        </IonList>
    </>
}


export const Todos: React.FC = () => {
    const [text, setText] = useState('');
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return <>
        <h2>Todo list form</h2>
        <p>Tasks are saved in application state</p>
        <IonList>
            {todos.map((todo: Todo) => (
                <IonItem key={todo.id}>
                    <IonCheckbox
                        slot="start"
                        checked={todo.completed}
                        onIonChange={() => dispatch(toggleTodo(todo.id))}
                    />
                    <IonLabel>{todo.text}</IonLabel>
                    <IonButton color="danger" slot="end" onClick={() => dispatch(removeTodo(todo.id))}>
                        Delete
                    </IonButton>
                </IonItem>
            ))}
        </IonList>
        <IonItem>
            <IonInput
                value={text}
                placeholder="Enter a new task"
                onIonChange={(e) => setText(e.detail.value!)}
            />
            <IonButton onClick={handleAddTodo}>Add</IonButton>
        </IonItem>
    </>
};
