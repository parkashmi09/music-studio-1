import { Toaster } from "react-hot-toast";

export default function AuthLayout({ title, leftImage, children }) {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg.png')",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-[1000px] mx-4 grid md:grid-cols-2 items-center rounded-[20px] bg-gradient-to-b from-[rgba(88,130,193,0.4)] to-[rgba(88,130,193,0.1)] overflow-hidden">
          {/* Left Section with Image */}
          <div className="h-full flex items-center justify-center p-6 md:p-8">
            <div className="relative w-full max-w-[400px]">
              <img
                src={leftImage}
                alt="Login"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute text-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl font-bold">
                {title}
              </div>
            </div>
          </div>

          {/* Right Section with Form */}
          <div className="p-6 md:p-8 flex flex-col space-y-6">
            {children}
          </div>
        </div>

        {/* Purple dots at bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="h-1 w-1 rounded-full bg-purple-500"
            />
          ))}
        </div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
}
