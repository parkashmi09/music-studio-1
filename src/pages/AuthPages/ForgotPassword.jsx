import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    email: false,
  });
  
  const [formData, setFormData] = useState({
    email: "",
  });
  
  const navigate=useNavigate();

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        if (!value) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Please enter a valid email";
        return "";
      default:
        return "";
    }
  };

  // Validate form fields on change
  useEffect(() => {
    const newErrors = {};
    
    if (touched.email) {
      const emailError = validateField('email', formData.email);
      if (emailError) newErrors.email = emailError;
    }
    
    setErrors(newErrors);
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const validateForm = () => {
    // Mark all fields as touched to show all errors
    setTouched({
      email: true,
    });

    const newErrors = {
      email: validateField('email', formData.email),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    // Perform password recovery logic here
    setTimeout(() => setIsLoading(false), 1000); // Simulating API call
    navigate("/otp-verification");

  };

  return (
    <div className="w-full max-w-md">
    
    <div className="text-center mb-8">
        <img 
          src="/images/logo.png" 
          alt="StudioSphere 360" 
          className="w-32 h-32 mx-auto mb-6"
        />
      </div>
          <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-white mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`block w-full px-4 py-3 border ${
                  touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {touched.email && errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            <p className="text-sm text-[#9f9f9f]">
              Input your email to recover password to access StudioSphere 360 account
            </p>

            <div className="w-full mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-black flex justify-center py-3 px-4 border border-transparent rounded-[100px] shadow-sm text-lg font-medium text-white bg-[#8bb0e8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Processing..." : "Continue"}
              </button>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-[#9f9f9f]">
                Back to{" "}
                <Link to="/" className="text-white font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </form>
   
    </div>
  );
}