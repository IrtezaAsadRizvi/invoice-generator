import { useState } from "react";

const InvoiceLogo = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            const reader = new FileReader();
            reader.onload = (e) => setImage(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center relative max-w-max">
            {image ? (
                <img src={image} alt="Invoice Logo" className="w-32 h-32 object-cover border rounded-md" />
            ) : (
                <div className="w-32 h-32 bg-gray-300 border rounded-md flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Upload Logo</span>
                </div>
            )}
            <input
                type="file" 
                accept="image/png, image/jpeg" 
                onChange={handleImageUpload} 
                className="mt-2 absolute top-0 left-0 right-0 bottom-0 z-10 opacity-0 cursor-pointer file:cursor-pointer"
            />
        </div>
    );
};

export default InvoiceLogo;
