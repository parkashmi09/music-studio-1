import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        if (!value) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Please enter a valid email";
        return "";
      case 'password':
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
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
    
    if (touched.password) {
      const passwordError = validateField('password', formData.password);
      if (passwordError) newErrors.password = passwordError;
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
      password: true,
    });

    const newErrors = {
      email: validateField('email', formData.email),
      password: validateField('password', formData.password),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };
  const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    // Perform login logic here
    setTimeout(() => setIsLoading(false), 1000); // Simulating API call
    navigate("/dashboard/home");
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

      <form onSubmit={handleSubmit} className="space-y-6">
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

        <div>
          <label
            htmlFor="password"
            className="block text-lg font-medium text-white mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full px-4 py-3 border ${
                touched.password && errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {touched.password && errors.password && (
            <p className="mt-1 text-xs text-red-400">{errors.password}</p>
          )}
          <div className="flex justify-end mt-2">
            <Link
              to="/forgot-password"
              className="text-sm text-white hover:text-blue-300"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className="w-full">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-black flex justify-center py-3 px-4 border border-transparent rounded-[100px] shadow-sm text-lg font-medium text-white bg-[#8bb0e8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Log in"}
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-[#9f9f9f]">
            By continuing, you agree to SoundSparkHub's{" "}
            <Link to="/terms" className="text-white font-medium">
              Terms & conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-white font-medium">
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-[#9f9f9f]">
            Didn't have an account?{" "}
            <Link to="/signup" className="text-white font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}