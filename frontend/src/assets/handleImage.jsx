import React from 'react'

const handleImage = (e) => {
    const image = e.target.value;
        try {
        const cloudName = process.env.CLOUDINARY_NAME; // Replace with your Cloudinary cloud name
        const uploadPreset = process.env.ClOUDINARY_UPLOAD_PRESET // Replace with your Cloudinary upload preset
        const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', uploadPreset);
        console.log('Upload success:', response.data);
        return apiUrl
        } catch (error) {
        return;
        }
}

export default handleImage