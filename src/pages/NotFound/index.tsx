import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export function NotFound() {
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Page Not Found</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <h1>Page Not Found</h1>
        </IonContent>
    </IonPage>
}