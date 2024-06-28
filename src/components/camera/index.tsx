import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonModal, IonRow } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { addPhoto } from '../../store/slices/cameraSlice';
import { RootState } from '../../store';

import "./styles.scss";

export const CameraWidget: React.FC = () => {
    const dispatch = useDispatch();

    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 90,
        });

        dispatch(addPhoto(photo));
    };

    return <>
        <h1>Camera Widget</h1>
        <IonButton onClick={takePhoto}>Take Photo</IonButton>
    </>
};

export const CameraAlbum: React.FC = () => {
    const photos = useSelector((state: RootState) => state.camera.photos);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    return (
        <>
            <h1>Camera Album</h1>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        {photos.map((photo, index) => (
                            <IonCol size="3" key={index}>
                                <IonImg
                                    src={photo.webPath}
                                    onClick={() => setSelectedPhoto(photo.webPath || '')}
                                />
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
                <IonModal isOpen={!!selectedPhoto} onDidDismiss={() => setSelectedPhoto(null)}>
                    <IonContent>
                        <IonButton onClick={() => setSelectedPhoto(null)}>Close</IonButton>
                        {selectedPhoto && <IonImg src={selectedPhoto} />}
                    </IonContent>
                </IonModal>
            </IonContent>
        </>
    );
};
