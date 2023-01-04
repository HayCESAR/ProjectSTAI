import { AuthGoogleProvider } from "./context/authGoogle";
import { AppRouter } from "./routes/routes";
import Sidebar from "./components/navbar/Sidebar";

export const App = () => {
  return (
    <AuthGoogleProvider>
      <AppRouter />
    </AuthGoogleProvider>
  );
};