import { storage } from "../../firebase_app";
import { useState, useEffect, useRef } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import imageCompression from 'browser-image-compression';
import Cropper from "react-easy-crop";
import getCroppedImg from "../utils/getCroppedImg"; 

// --- Import Lucid React Icons ---
import {
  UploadCloud,
  ZoomIn,
  RotateCcw,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

function AmbassadorUploadPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Cropper States
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // Upload States
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState(null);

  const fileInputRef = useRef(null); // Ref to reset file input

  // Preview cleanup
  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  // Handle file input
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  };

  // Perform crop
  const handleCropDone = async () => {
    try {
      const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels, rotation);
      const croppedFile = new File([croppedBlob], "cropped.webp", { type: "image/webp" });
      setFile(croppedFile);
      setImageSrc(null);
      setError(null);
    } catch (error) {
      console.error("Cropping failed:", error);
      setError("Failed to crop image. Try again.");
    }
  };

  // Cancel crop
  const handleCropCancel = () => {
    setImageSrc(null);
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Reset the file input
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !name || !role || !desc) {
      setError("Please fill all fields (Name, Role, Photo, and Description)!");
      return;
    }

    setIsUploading(true);
    setUploadSuccess(false);
    setError(null);
    setUploadProgress(0);

    try {
      // Compress and convert to WebP
      const options = {
        maxSizeMB: 0.3,
        maxWidthOrHeight: 800,
        useWebWorker: true,
        fileType: "image/webp",
      };

      const compressedFile = await imageCompression(file, options);
      const uniqueFileName = `${uuidv4()}.webp`;
      const storageRef = ref(storage, `photo_ambd/${uniqueFileName}`);

      const uploadTask = uploadBytesResumable(storageRef, compressedFile, {
        contentType: "image/webp",
      });

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (uploadError) => {
          console.error("Upload failed:", uploadError);
          setError("Photo upload failed. Try again.");
          setIsUploading(false);
        },
        async () => {
          try {
            const photoUrl = await getDownloadURL(uploadTask.snapshot.ref);

            await fetch(import.meta.env.VITE_AMBASSADOR_URL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, role, desc, photoUrl }),
            });

            setUploadSuccess(true);
            setName("");
            setRole("");
            setDescription("");
            setFile(null);
            setPreviewUrl(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = null; // Reset the file input
            }

            setTimeout(() => setUploadSuccess(false), 5000);
          } catch (apiError) {
            console.error("Error saving data:", apiError);
            setError("Uploaded photo, but failed to save details.");
          } finally {
            setIsUploading(false);
            setUploadProgress(0);
          }
        }
      );
    } catch (compressionError) {
      console.error("Compression failed:", compressionError);
      setError("Failed to compress image. Try smaller file.");
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className='mb-4 flex items-center justify-center'>
            <img src="vow_logo.webp" className='rounded-full w-24 h-24' alt="VOW Logo" />
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">Become an Earth Ambassador</h1>
          <p className="text-green-600 text-sm">Share your passion and inspire others to protect our planet.</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {uploadSuccess && (
              <div className="flex items-center gap-2 p-3 bg-green-100 text-green-800 font-medium rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                You are now an Earth Ambassador!
              </div>
            )}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-100 text-red-800 font-medium rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-600" /> 
                {error}
              </div>
            )}

            <div>
              <label className="block text-green-700 font-semibold mb-2">👤 Full Name</label>
              <input
                type="text"
                placeholder="e.g., Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors"
                disabled={isUploading}
              />
            </div>

            <div>
              <label className="block text-green-700 font-semibold mb-2">💼 Role/Title</label>
              <input
                type="text"
                placeholder="e.g., Founder, GreenTech"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors"
                disabled={isUploading}
              />
            </div>

            {/* --- Improved Custom File Input --- */}
            <div>
              <label className="block w-50 text-green-700 font-semibold mb-2">📸 Profile Photo</label>
              <div className="relative w-full h-40 border-2 border-green-200 border-dashed rounded-lg flex items-center justify-center group overflow-hidden">
                {previewUrl ? (
                    <>
                        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                            <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Change Photo</span>
                        </div>
                    </>
                ) : (
                    <div className="text-center text-green-600">
                        <UploadCloud className="w-10 h-10 text-green-400 mx-auto" />
                        <p className="mt-2 font-medium">Click to upload image</p>
                        <p className="text-sm">Square photo recommended</p>
                    </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  disabled={isUploading}
                />
              </div>
            </div>

            <div>
              <label className="block text-green-700 font-semibold mb-2">📝 Description</label>
              <textarea
                placeholder="Tell us about your passion for the environment..."
                value={desc}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors resize-y"
                disabled={isUploading}
              />
            </div>

            {isUploading && uploadProgress > 0 && (
              <div className="w-full bg-green-100 rounded-full h-2.5">
                <div 
                  className="bg-green-500 h-2.5 rounded-full transition-all" 
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            )}

            <button
              type="submit"
              disabled={isUploading || !name || !role || !desc || !file}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all
                ${isUploading ? "bg-green-200 text-green-400" : "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700"}
                disabled:bg-green-200 disabled:text-green-400 disabled:cursor-not-allowed
              `}
            >
              {isUploading ? `Submitting (${Math.round(uploadProgress)}%)...` : "Register as Ambassador"}
            </button>
          </form>
        </div>
      </div>

      {/* --- Improved Cropper Modal --- */}
      {imageSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Crop Your Photo</h2>
            
            {/* Cropper Container */}
            <div className="relative w-full h-[300px] md:h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    rotation={rotation}
                    aspect={1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onRotationChange={setRotation}
                    onCropComplete={(_, croppedAreaPixels) => setCroppedAreaPixels(croppedAreaPixels)}
                />
            </div>

            {/* Controls */}
            <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                    <ZoomIn className="w-5 h-5 text-gray-500" />
                    <label className="text-sm font-medium text-gray-700 w-20">Zoom</label>
                    <input 
                        type="range" min={1} max={3} step={0.1} value={zoom} 
                        onChange={(e) => setZoom(e.target.value)}
                        className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <RotateCcw className="w-5 h-5 text-gray-500" />
                    <label className="text-sm font-medium text-gray-700 w-20">Rotate</label>
                    <input 
                        type="range" min={0} max={360} step={1} value={rotation} 
                        onChange={(e) => setRotation(e.target.value)}
                        className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end mt-6 gap-3">
              <button 
                className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors" 
                onClick={handleCropCancel}
              >
                Cancel
              </button>
              <button 
                className="bg-green-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors" 
                onClick={handleCropDone}
              >
                Crop & Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AmbassadorUploadPage;