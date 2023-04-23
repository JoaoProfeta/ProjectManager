import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./requisições/queryClient";

ReactDOM.createRoot(document.getElementById("root")).render(
  
	<QueryClientProvider client={queryClient}>
		<App/>
	</QueryClientProvider>
    
 
);
