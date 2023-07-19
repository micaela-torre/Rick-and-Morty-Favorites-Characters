import { SnackbarProvider } from "notistack";
import "./App.css";
import Home from "./pages/Home/Home";
import { SnackbarUtilitiesConfigutator } from "./helpers/snackbar-manager";
import { EpisodeContextProvider } from "./context/EpisodeContext";

function App() {
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigutator />
      <EpisodeContextProvider>
        <Home />
      </EpisodeContextProvider>
    </SnackbarProvider>
  );
}
export default App;
