import { useState } from "react";
import { useTranslations } from "next-intl";

const InvoiceLogo = () => {
    const t = useTranslations("invoice");
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
                <img src={image} alt="Invoice Logo" className="w-20 h-20 object-cover rounded-sm" />
            ) : (
                <div className="w-20 h-20 bg-light-gray rounded-sm flex items-center justify-center">
                    <span className="text-black opacity-40 font-bold capitalize">{t('logo')}</span>
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
