import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { CameraAlbum, CameraWidget } from "../../components/camera";

import "./styles.scss"
import { Hero } from "../../components/hero";
import { useEffect } from "react";
import { Toast } from '@capacitor/toast';

export function Home() {
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
                <IonTitle>Home</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <Hero height="50vh">
                <h1>Syntapse Capacitor Sandbox</h1>
                <p>Demonstrating capabilities and features of Capacitor.js</p>
            </Hero>
            <h1>Brief introduction to capacitor.js</h1>
            <p>
                Capacitor.js is a cross-platform native runtime developed by Ionic, enabling web developers to build and deploy native mobile apps and web apps using a single codebase. It acts as a bridge between web applications and native device functionalities, offering a modern, flexible API for accessing hardware features like the camera, GPS, and filesystem. Capacitor supports multiple platforms, including iOS, Android, and the web, making it easier to maintain and scale applications. It integrates seamlessly with popular web frameworks like Angular, React, and Vue, and promotes the use of web standards and progressive web app (PWA) capabilities.
            </p>
            <h1>Brief introduction to capacitor and React</h1>
            <div>
                <h2>Using Capacitor with React offers several benefits, including:</h2>
                <ul>
                    <li>
                        Single codebase cross-Platform Development: Write a single codebase for iOS, Android, and the web, reducing development time and effort.
                    </li>
                    <li>
                        Access to Native Features: Capacitor provides a modern API to access native device functionalities, like camera, GPS, and filesystem, directly from React.
                    </li>
                    <li>
                        Seamless Integration: Capacitor integrates smoothly with React and other modern web frameworks, enhancing development efficiency.
                    </li>
                    <li>
                        Web Standards: Promotes using web standards and progressive web app (PWA) capabilities.
                    </li>
                    <li>
                        Community and Ecosystem: Leverage a robust ecosystem and community support from both Ionic and React, ensuring ample resources and plugins.
                    </li>
                </ul>
            </div>
        </IonContent>
    </IonPage>
}