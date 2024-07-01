import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import "./styles.scss"
import { useEffect } from "react";
import { Toast } from '@capacitor/toast';
import { Cube3D } from "../../components/3d/cube/cube";
import { BackgroundImageZoom } from "../../components/backgroundImageZoom";

export function Box() {
    useEffect(() => {
        (async () => {
            console.log("Home.useEffect")
            await Toast.show({
                text: 'This is a toast',
                duration: "long",
                position: "center",
            });
        })();
    }, [])
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>3D Box</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <Cube3D />
            <BackgroundImageZoom />
        </IonContent>
    </IonPage>
}