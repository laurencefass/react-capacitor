import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonModal, IonRow } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { addPhoto } from '../../store/slices/cameraSlice';
import { RootState } from '../../store';

import { Swiper, SwiperSlide } from 'swiper/react';

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
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleImageClick = (photo: string, index: number) => {
        setSelectedPhoto(photo);
        setSelectedIndex(index);
    };

    return (
        <>
            <h1>Camera Album</h1>
            <IonContent>
                <IonGrid ion-no-padding>
                    <IonRow>
                        {photos.map((photo, index) => (
                            <IonCol size="12" size-lg="3" size-md="4" size-sm="6" size-xs="12" key={index}>
                                <IonImg
                                    style={{ height: "200px" }}
                                    src={photo.webPath}
                                    onClick={() => handleImageClick(photo.webPath || '', index)}
                                />
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
                <IonModal isOpen={!!selectedPhoto} onDidDismiss={() => setSelectedPhoto(null)}>
                    <IonContent>
                        <IonButton onClick={() => setSelectedPhoto(null)}>Close</IonButton>
                        {selectedPhoto && (
                            <Swiper initialSlide={selectedIndex || 0}>
                                {photos.map((photo, index) => (
                                    <SwiperSlide key={index}>
                                        <IonImg src={photo.webPath} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </IonContent>
                </IonModal>
            </IonContent>
        </>
    );
};

