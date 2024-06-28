import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { CameraAlbum, CameraWidget } from "../../components/camera";

import "./styles.scss"

export function Camera() {
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Camera</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <h1>Camera</h1>
            <CameraWidget />
            <CameraAlbum />
        </IonContent>
    </IonPage>
}