// In your React component:
import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { InputProps, PublicFieldProps } from 'react-admin';

interface ImageUploadProps extends InputProps {
  label?: string;
  input?: PublicFieldProps;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ input, label }:ImageUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (files: File[]) => {
    setSelectedFile(files[0]);
  }

  const handleFileUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    const response = await fetch('http://localhost:3333/post', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const fileUrl = await response.json();
      if (input) {
        input.source = fileUrl;
      }; // Set the file URL in the form input
    } else {
      console.error('Error uploading image');
    }
  }

  return (
    <DropzoneArea
      acceptedFiles={['image/*']}
      filesLimit={1}
      onChange={handleFileSelect}
      showPreviewsInDropzone={true}
      dropzoneText={label || 'Drag and drop an image here or click to browse'}
      onDrop={() => handleFileUpload()}
    />
  );
}

export default ImageUpload;
