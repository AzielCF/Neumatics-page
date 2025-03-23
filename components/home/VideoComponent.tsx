import { useEffect, useState } from "react";

export default function VideoComponent() {
  const [mountVideo, setMountVideo] = useState(false);

  useEffect(() => {
    // Espera a que el primer render termine y luego monta el video
    const timeout = setTimeout(() => setMountVideo(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {!mountVideo && <div className="absolute inset-0 bg-black" />} {/* Placeholder */}
      {mountVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dktwu41vm/video/upload/f_auto:video,q_auto/v1/Neumatics-page/ewz6uxlzzj3ekn5zbidf"
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
}
