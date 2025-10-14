// src/pages/AmbassadorUploadPage.jsx

import { storage } from "../../firebase_app"; // Adjust path as needed
import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid'; // For unique file names

function AmbassadorUploadPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // States for upload process and feedback
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Effect to create and clean up the image preview URL
  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    // Free memory when the component unmounts or the file changes
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    }
  };
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!file || !name || !role || !desc) {
    setError("Please fill all fields (Name, Role, Photo, and Description) to register as an Ambassador!");
    return;
  }

  setIsUploading(true);
  setUploadSuccess(false);
  setError(null);
  setUploadProgress(0);

  try {
    // Compress the image
    const options = {
      maxSizeMB: 0.3,          // target ~300 KB
      maxWidthOrHeight: 800,   // max width or height
      useWebWorker: true,
      initialQuality: 0.8      // keep good visual clarity
    };

    const compressedFile = await imageCompression(file, options);

    //Create a unique filename
    const fileExtension = file.name.split('.').pop();
    const uniqueFileName = `${uuidv4()}.${fileExtension}`;
    const storageRef = ref(storage, `photo_ambd/${uniqueFileName}`);

    //  Upload the compressed file
    const uploadTask = uploadBytesResumable(storageRef, compressedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (uploadError) => {
        console.error("Ambassador photo upload failed:", uploadError);
        setError("Photo upload failed. Please check your connection and try again.");
        setIsUploading(false);
      },
      async () => {
        try {
          const photoUrl = await getDownloadURL(uploadTask.snapshot.ref);

          // Save ambassador details to backend
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

          setTimeout(() => setUploadSuccess(false), 5000);

        } catch (apiError) {
          console.error("Error saving ambassador data:", apiError);
          setError("Your photo was uploaded, but we failed to save your details. Please contact support.");
        } finally {
          setIsUploading(false);
          setUploadProgress(0);
        }
      }
    );
  } catch (compressionError) {
    console.error("Image compression failed:", compressionError);
    setError("Failed to compress image. Please try a smaller file.");
    setIsUploading(false);
    setUploadProgress(0);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className='mb-4 flex items-center justify-center'>
            <img src="vow_logo.jpg" className='rounded-full w-24 h-24' alt="VOW Logo" />
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">Become an Earth Ambassador</h1>
          <p className="text-green-600 text-sm leading-relaxed">Share your passion and inspire others to protect our planet.</p>
        </div>

        {/* Ambassador Registration Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Success & Error Messages */}
            {uploadSuccess && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 font-medium flex items-center">
                <span className="text-green-500 mr-2">🌿</span>
                Congratulations! You are now an Earth Ambassador. Thank you!
              </div>
            )}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 font-medium flex items-center">
                <span className="mr-2">⚠️</span>
                {error}
              </div>
            )}

            {/* Name Input */}
            <div>
              <label className="block text-green-700 font-semibold mb-2">👤 Your Full Name</label>
              <input
                type="text"
                placeholder="e.g., Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors"
                disabled={isUploading}
              />
            </div>

            {/* Role Input */}
            <div>
              <label className="block text-green-700 font-semibold mb-2">💼 Your Role/Title</label>
              <input
                type="text"
                placeholder="e.g., Founder & CEO of GreenTech"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors"
                disabled={isUploading}
              />
            </div>

            {/* Photo Upload with Preview */}
            <div>
              <label className="block text-green-700 font-semibold mb-2">📸 Your Profile Photo</label>
              {previewUrl && (
                <div className="mb-4">
                  <img src={previewUrl} alt="Profile photo preview" className="rounded-lg max-h-40 mx-auto border border-green-200 shadow-sm" />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-green-100 file:text-green-700 file:font-medium hover:file:bg-green-200 cursor-pointer"
                disabled={isUploading}
              />
            </div>

            {/* Description/Bio Input */}
            <div>
              <label className="block text-green-700 font-semibold mb-2">📝 Tell us about yourself</label>
              <textarea
                placeholder="Share your passion for environmental protection, your journey, or what inspires you..."
                value={desc}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors resize-y"
                disabled={isUploading}
              ></textarea>
            </div>


            {/* Upload Progress Bar */}
            {isUploading && uploadProgress > 0 && (
              <div className="w-full bg-green-100 rounded-full h-2.5">
                <div 
                  className="bg-green-500 h-2.5 rounded-full transition-all duration-300 ease-out" 
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isUploading || !name || !role || !desc || !file}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                isUploading || !name || !role || !desc || !file
                  ? "bg-green-200 text-green-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              }`}
            >
              {isUploading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"></div>
                  {`Submitting (${Math.round(uploadProgress)}%)...`}
                </div>
              ) : (
                "Register as Ambassador"
              )}
            </button>
          </form>
          
          {/* Footer Message */}
          <div className="mt-6 text-center">
            <p className="text-green-600 text-sm">Inspire change, one step at a time. Thank you for your commitment! 💚</p>
          </div>
        </div>

        {/* Nature Decorations */}
        <div className="mt-8 flex justify-center space-x-8 text-2xl opacity-60">
            <span>🌿</span>
            <span>🌱</span>
            <span>🍃</span>
            <span>🌳</span>
            <span>🌍</span>
        </div>
      </div>
    </div>
  );
}

export default AmbassadorUploadPage;