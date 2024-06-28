import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { TodoSubscriber, Todos } from "../../components/todo/todo";

export function Todo() {
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Redux Todo List (and subscriber)</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <h2>This page is using redux for state management</h2>
            <Todos />
            <TodoSubscriber />
        </IonContent>
    </IonPage>
}