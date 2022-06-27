import React from 'react';
import ImageGrid from '../components/imageGrid';
import Modal from '../components/Modal';
import Title from '../components/Title';
import UploadForm from '../components/UploadForm';
import { useState } from 'react';


export default function Home() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className='App'>
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  )
}
