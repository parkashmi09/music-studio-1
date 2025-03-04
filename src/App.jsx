import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/AuthPages/Login";
import AuthLayout from "./layouts/AuthLayout";
import "./index.css";
import Signup from "./pages/AuthPages/Register";
import ForgotPassword from "./pages/AuthPages/ForgotPassword";
import OTPVerification from "./pages/AuthPages/OtpVerfication";
import ChangePassword from "./pages/AuthPages/ChangePassword";
import DashboardLayout from "./layouts/DashbaordLayout";
import Home from "./pages/Dashboard/Home";
import { PlatformAnalytics } from "./pages/Dashboard/PlateformAnalytics";
import { HelpNotification } from "./pages/Dashboard/HelpNotification";
import { ContentInsights } from "./pages/Dashboard/ContentInsights";
import { IntegrationConfiguration } from "./pages/Dashboard/IntegrationConfiguration";
import { SecurityPrivacy } from "./pages/Dashboard/SecurityPrivacy";
import ArtistManagement from "./pages/Dashboard/ArtistManagement";
import AddArtistForm from "./pages/Dashboard/AddArtist";
import Settings from "./pages/Dashboard/Settings";
import ArtistDetails from "./pages/Dashboard/ArtistDetails";
import ContentModeration from "./pages/Dashboard/ContentModeration";
import AllMusic from "./pages/Dashboard/ContentModerationPages/AllMusic";
import AllLyrics from "./pages/Dashboard/ContentModerationPages/AllLyrics";
import FinancialManagement from "./pages/Dashboard/FinancialManagement";
import AllVideos from "./pages/Dashboard/ContentModerationPages/AllVideos";
import AllMerchandise from "./pages/Dashboard/ContentModerationPages/AllMerhcantdise";
import SubscriptionManagement from "./pages/Dashboard/SubscriptionManagement";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthLayout title="Log IN" leftImage="/images/loginBg.png">
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout title="Sign Up" leftImage="/images/signUpBg.png">
              <Signup />
            </AuthLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <AuthLayout
              title="Forgot Password"
              leftImage="/images/forgotPassBg.png"
            >
              <ForgotPassword/>
            </AuthLayout>
          }
        />
         <Route
          path="/otp-verification"
          element={
            <AuthLayout
              title="OTP Verification"
              leftImage="/images/OtpBg.png"
            >
              <OTPVerification/>
            </AuthLayout>
          }
        />
           <Route
          path="/change-password"
          element={
            <AuthLayout
              title="Set New Password"
              leftImage="/images/setPassword.png"
            >
            <ChangePassword/>
            </AuthLayout>
          }
        />
         <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="artist-management" element={<ArtistManagement/>} />
          <Route path="add-artist" element={<AddArtistForm/>} />
          <Route path="artist-details" element={<ArtistDetails/>} />
          <Route path="content-moderation" element={<ContentModeration/>} />
          <Route path="all-lyrics" element={<AllLyrics/>} />
          <Route path="all-music" element={<AllMusic/>} />
          <Route path="all-merchandise" element={<AllMerchandise/>} />
          <Route path="all-videos" element={<AllVideos/>} />
          <Route path="financial-management" element={<FinancialManagement/>} />
          <Route path="platform-analytics" element={<PlatformAnalytics/>} />
          <Route path="help-notification" element={<HelpNotification/>} />
          <Route path="content-insights" element={<ContentInsights/>} />
          <Route path="integration-configuration" element={<IntegrationConfiguration/>} />
          <Route path="subscription-management" element={<SubscriptionManagement/>} />
          <Route path="security-privacy" element={<SecurityPrivacy/>} />
          <Route path="settings" element={<Settings/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
