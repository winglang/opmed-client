import React from 'react';
import './App.css';
import {Layout} from "./Layout";
import {
    QueryClient,
    QueryClientProvider,
} from "react-query";

function App() {

    const queryClient = new QueryClient();

    return (
    <div className="App">
        <QueryClientProvider client={queryClient}>
            <Layout/>
        </QueryClientProvider>
    </div>
  );
}

export default App;
