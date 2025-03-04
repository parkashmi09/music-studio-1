import { Link, useLocation, useNavigate } from "react-router-dom";
import Studio from "../assets/images/studio.png";
import StudioLogo from "../assets/images/StLogo.png";
import Divider from "../assets/images/divider.png";
import { useEffect } from "react";

const menuItems = [
  {
    icon: "/images/sidebar/home.png",
    text: "Dashboard",
    path: "/dashboard/home",
  },
  {
    icon: "/images/sidebar/person.png",
    text: "Artist Management",
    path: "/dashboard/artist-management",
  },
  {
    icon: "/images/sidebar/music.png",
    text: "Content Moderation",
    path: "/dashboard/content-moderation",
  },
  {
    icon: "/images/sidebar/wallet.png",
    text: "Financial Management",
    path: "/dashboard/financial-management",
  },
  {
    icon: "/images/sidebar/chart.png",
    text: "Platform Analytics",
    path: "/dashboard/platform-analytics",
  },
  {
    icon: "/images/sidebar/support.png",
    text: "Help & Notification",
    path: "/dashboard/help-notification",
  },
  {
    icon: "/images/sidebar/reports.png",
    text: "Content Insights & Reports",
    path: "/dashboard/content-insights",
  },
  {
    icon: "/images/sidebar/settings.png",
    text: "Integration & Configuration",
    path: "/dashboard/integration-configuration",
  },
  {
    icon: "/images/sidebar/subscription.png",
    text: "Subscription Management",
    path: "/dashboard/subscription-management",
  },
  {
    icon: "/images/sidebar/security.png",
    text: "Security & Privacy",
    path: "/dashboard/security-privacy",
  },
];

const SidebarItem = ({ icon, text, path }) => {
  const location = useLocation();

  const isActive = () => {
    // For artist management routes
    if (path === "/dashboard/artist-management") {
      return (
        location.pathname === path ||
        location.pathname === "/dashboard/add-artist" ||
        location.pathname.startsWith("/dashboard/artist-management/") ||
        location.pathname.startsWith("/dashboard/artist-details")
      );
    }

    // For content moderation routes
    if (path === "/dashboard/content-moderation") {
      return (
        location.pathname === path ||
        location.pathname === "/dashboard/all-lyrics" ||
        location.pathname === "/dashboard/all-music" ||
        location.pathname === "/dashboard/all-videos" ||
        location.pathname === "/dashboard/all-merchandise"
      );
    }

    // For other routes, exact match only
    return location.pathname === path;
  };

  if (isActive()) {
    return (
      <Link to={path} className="block">
        <div className="mx-3 p-[1px] rounded-[15px] bg-gradient-to-r from-[#FF0844] to-[#0075FF]">
          <div className="flex items-center gap-3 px-4 py-3 rounded-[14px] bg-[#1A1F37]">
            <div className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#0075FF]">
              <img
                src={icon}
                alt={text}
                className="w-5 h-5 brightness-0 invert"
              />
            </div>
            <span className="text-white text-[14px] font-medium">{text}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={path} className="block">
      <div className="flex items-center gap-3 px-4 py-3 mx-3 rounded-[15px] hover:bg-blue-900/30 transition-all">
        <div className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#1A1F37]">
          <img src={icon} alt={text} className="w-5 h-5 opacity-70" />
        </div>
        <span className="text-white text-[14px] font-medium">{text}</span>
      </div>
    </Link>
  );
};

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    // Find the matching menu item based on the current path
    const matchingItem = menuItems.find((item) => {
      // For artist management, match both main route and sub-routes
      if (item.path === "/dashboard/artist-management") {
        return (
          currentPath === item.path ||
          currentPath === "/dashboard/add-artist" ||
          currentPath.startsWith("/dashboard/artist-management/")
        );
      }

      // For other routes, exact match only
      return currentPath === item.path;
    });

    // If no matching item is found, you can handle it here if needed
    if (!matchingItem) {
      console.log("No matching route found for:", currentPath);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <aside
      style={{
        backgroundImage: "url('/images/sidebarBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`fixed p-2 top-0 left-0 h-screen overflow-hidden
        w-[280px] lg:w-[323px] flex flex-col bg-gradient-to-r 
        from-[rgba(6,11,38,0.94)] to-[rgba(26,31,55,0)] text-white shadow-xl z-30
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      {/* Logo section */}
      <div className="py-4 px-8 flex-shrink-0">
        <div className="flex items-center">
          <img
            src={StudioLogo}
            className="h-12 w-[183px] object-contain"
            alt="Studio Logo"
          />
          <img src={Studio} className="w-full object-contain" alt="Studio" />
        </div>
      </div>

      {/* <div className="border-b border-gray-800  mx-4 flex-shrink-0"></div> */}
      <img src={Divider} className="px-2" alt="divider" />

      {/* Scrollable menu items */}
      <div className="mt-4 flex-1 overflow-y-auto py-2 space-y-4 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-transparent">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            path={item.path}
          />
        ))}
      </div>

      {/* Logout section */}
      <div
        onClick={handleLogout}
        className="p-4 flex-shrink-0 border-t border-gray-800/50"
      >
        <SidebarItem
          icon="/images/sidebar/logout.png"
          text="Log Out"
          path="/logout"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
