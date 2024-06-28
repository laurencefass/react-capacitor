import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { UserForm, UserCard } from "../../components/user";

export function Profile() {
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Profile</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <h1>Profile</h1>
            <UserForm />
            <UserCard />
        </IonContent>
    </IonPage>
}