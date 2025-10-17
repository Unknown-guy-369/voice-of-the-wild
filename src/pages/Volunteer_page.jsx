import { storage } from "../../firebase_app";
import { useState, useEffect } from "react"; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; 
import { v4 as uuidv4 } from 'uuid'; 
import imageCompression from 'browser-image-compression';

function VolunteerUploadPage() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // For image preview

  // State for upload process
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState(null); // For displaying errors in the UI

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null); // Clear previous errors
    }
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!file || !name) {
    setError("Please provide both your name and a photo to join our mission!");
    return;
  }

  setIsUploading(true);
  setUploadSuccess(false);
  setError(null);
  setUploadProgress(0);

  try {
    //  Compress and convert to WebP
    const options = {
      maxSizeMB: 0.3, // Target size ~300KB
      maxWidthOrHeight: 800, // Resize max dimension
      useWebWorker: true,
      fileType: "image/webp", // Force WebP output
    };

    const compressedFile = await imageCompression(file, options);

    // Rename file to .webp 
    const uniqueFileName = `${uuidv4()}.webp`;
    const storageRef = ref(storage, `photos/${uniqueFileName}`);

    //  Set correct metadata for WebP
    const metadata = {
      contentType: "image/webp",
    };

    // Upload to Firebase
    const uploadTask = uploadBytesResumable(storageRef, compressedFile, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (uploadError) => {
        console.error("Upload failed:", uploadError);
        setError("Photo upload failed. Please try again.");
        setIsUploading(false);
      },
      async () => {
        try {
          // 5. Download URL
          const photoUrl = await getDownloadURL(uploadTask.snapshot.ref);

          //save backend
          await fetch(import.meta.env.VITE_VOLUNTEER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, photoUrl }),
          });

          setUploadSuccess(true);
          setName("");
          setFile(null);

          setTimeout(() => setUploadSuccess(false), 5000);

        } catch (apiError) {
          console.error("Error saving user data:", apiError);
          setError(
            "Your photo was uploaded, but we failed to save your details. Please contact support."
          );
        } finally {
          setIsUploading(false);
        }
      }
    );
  } catch (compressionError) {
    console.error("Image compression failed:", compressionError);
    setError("Failed to compress image. Please try a smaller file.");
    setIsUploading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className='mb-4 flex items-center justify-center'>
            <img src="vow_logo.webp" className='rounded-full w-24 h-24' alt="VOW Logo" />
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">Join Nature's Mission</h1>
          <p className="text-green-600 text-sm leading-relaxed">Take the pledge to protect our planet and become an Earth Guardian</p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Success & Error Messages */}
            {uploadSuccess && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 font-medium flex items-center">
                <span className="text-green-500 mr-2">🌿</span>
                Welcome to the family! Your pledge has been recorded.
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
              <label className="block text-green-700 font-semibold mb-2">🌍 Your Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors"
                disabled={isUploading}
              />
            </div>

            {/* Photo Upload with Preview */}
            <div>
              <label className="block text-green-700 font-semibold mb-2">📸 Your Photo</label>
              {previewUrl && (
                <div className="mb-4">
                  <img src={previewUrl} alt="Selected preview" className="rounded-lg max-h-40 mx-auto" />
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

            {/* Upload Progress Bar */}
            {isUploading && (
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
              disabled={isUploading || !name || !file}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                isUploading || !name || !file
                  ? "bg-green-200 text-green-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              }`}
            >
              {isUploading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"></div>
                  {`Uploading (${Math.round(uploadProgress)}%)...`}
                </div>
              ) : (
                "Take The Pledge"
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-green-600 text-sm">By joining, you pledge to protect and nurture our environment 🌍</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-8 text-2xl opacity-60">
          <span>🌿</span><span>🌱</span><span>🍃</span><span>🌳</span><span>🌍</span>
        </div>
      </div>
    </div>
  );
}

export default VolunteerUploadPage;