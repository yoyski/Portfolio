import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Profile from "./components/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div
        className="min-h-screen transition-colors 
                    bg-emerald-50 dark:bg-slate-900"
      >
        <div className="pt-20 lg:pt-0 px-6">
          <div
            className="mx-auto space-y-6 
                        md:max-w-3xl 
                        lg:flex lg:max-w-5xl lg:gap-6
                        xl:max-w-[80rem]"
          >
            <Profile />
            <App />
          </div>
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>,
);