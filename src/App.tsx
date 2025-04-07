import AppHandler from "./app/AppHandler";
import { ThemeProvider } from "./utils/themeProvider";

function App() {
  return (
    <ThemeProvider>
      <AppHandler />
    </ThemeProvider>
  );
}

export default App;
