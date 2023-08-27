import Image from "next/image";
import React, { useState, useRef } from "react";

function CaesarCipherImage() {
  const [inputImage, setInputImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [shiftAmount, setShiftAmount] = useState(0);

  const imageRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setInputImage(img);
        setOutputImage(null); // Reset output image when a new image is uploaded
      };
      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  };

  const encryptImage = () => {
    if (inputImage && imageRef.current) {
      const image = imageRef.current;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          // Apply Caesar cipher encryption to the pixel data
          data[i] = (data[i] + shiftAmount) % 256;
          data[i + 1] = (data[i + 1] + shiftAmount) % 256;
          data[i + 2] = (data[i + 2] + shiftAmount) % 256;
        }

        ctx.putImageData(imageData, 0, 0);
        setOutputImage(canvas.toDataURL());
      };

      image.src = inputImage.src;
    }
  };

  return (
    <div>
      <h1>Caesar Cipher Image Encryption and Decryption</h1>
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <div>
          <label>Shift Amount: </label>
          <input
            type="number"
            value={shiftAmount}
            onChange={(e) => setShiftAmount(parseInt(e.target.value))}
          />
        </div>
        <button onClick={encryptImage}>Encrypt</button>
      </div>
      <div>
        <div>
          {inputImage && (
            <Image ref={imageRef} src={inputImage.src} alt="Original Image" />
          )}
        </div>
        <div>
          {outputImage && <Image src={outputImage} alt="Encrypted Image" />}
        </div>
      </div>
    </div>
  );
}

export default CaesarCipherImage;
