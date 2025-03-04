import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function ChangePassword() {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  
  const [touched, setTouched] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
    match: false,
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const navigate= useNavigate();
  
  // Password validation criteria
  const validatePassword = (password) => {
    return {
      length: password.length >= 8 && password.length <= 20,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[@#$%^&*()_\-+=<>?/{}|~]/.test(password),
    };
  };
  
  // Update validations whenever password changes
  useEffect(() => {
    const { newPassword, confirmPassword } = passwords;
    const passwordValidations = validatePassword(newPassword);
    
    setValidations({
      ...passwordValidations,
      match: newPassword === confirmPassword && newPassword !== "",
    });
  }, [passwords]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };
  
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };
  
  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  
  const isFormValid = () => {
    return (
      validations.length &&
      validations.uppercase &&
      validations.lowercase &&
      validations.number &&
      validations.special &&
      validations.match
    );
  };
  
  const handleSubmit = () => {
    if (!isFormValid()) {
      // Mark all fields as touched to show validations
      setTouched({
        newPassword: true,
        confirmPassword: true,
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate or show success message
      navigate("/");
    }, 1000);
  };
  
  // Helper function to render validation status
  const ValidationItem = ({ satisfied, text }) => (
    <li className="flex items-center space-x-2">
      <span className={`text-xs ${satisfied ? "text-green-400" : "text-white"}`}>•</span>
      <span className="text-white text-sm">{text}</span>
    </li>
  );
  
  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <img 
          src="/images/logo.png" 
          alt="StudioSphere 360" 
          className="w-32 h-32 mx-auto mb-6"
        />
      </div>
      
      <h2 className="text-white text-2xl font-medium mb-2 text-left">New Password</h2>
      
      <div className="space-y-4">
        <div>
          <div className="relative">
            <input
              type={showPassword.newPassword ? "text" : "password"}
              name="newPassword"
              value={passwords.newPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-white rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("newPassword")}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword.newPassword ? (
                <EyeOff className="h-5 w-5 text-gray-500" />
              ) : (
                <Eye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>
        
        <h2 className="text-white text-2xl font-medium text-left">Re-enter Password</h2>
        
        <div>
          <div className="relative">
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-white rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword.confirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-500" />
              ) : (
                <Eye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={isLoading || !isFormValid()}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-[100px] shadow-sm text-lg font-medium text-black bg-[#8bb0e8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Processing..." : "Continue"}
        </button>
        
        <div className="space-y-2">
          <div className="text-white text-sm">
            <strong>Length:</strong> Minimum 8 characters, maximum 20 characters.
          </div>
          
          <div>
            <div className="text-white text-sm mb-1">
              <strong>Complexity:</strong> Must include at least one of each:
            </div>
            <ul className="space-y-1 pl-4">
              <ValidationItem 
                satisfied={validations.uppercase}
                text="Uppercase Letter (A-Z)"
              />
              <ValidationItem 
                satisfied={validations.lowercase}
                text="Lowercase Letter (a-z)"
              />
              <ValidationItem 
                satisfied={validations.number}
                text="Number (0-9)"
              />
              <ValidationItem 
                satisfied={validations.special}
                text="Special Character (@#$%^&*()_-+=<>?/{}|~)"
              />
            </ul>
          </div>
          
          {touched.confirmPassword && !validations.match && (
            <div className="text-red-400 text-sm">
              Passwords do not match
            </div>
          )}
        </div>
      </div>
    </div>
  );
}