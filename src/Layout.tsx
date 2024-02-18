import {Header} from "./Header";
import {Lists} from "./Lists";
// import {useConfig} from "./use-config";

export const Layout = () => {

  // Create URLSearchParams object
  const searchParams = new URLSearchParams(new URL(window.location.href).search);

  // Get specific query parameter
  const url = searchParams.get('baseUrl') || "https://ma82rg0r1i.execute-api.us-east-1.amazonaws.com/prod"; // 'value1'


    return (
        <div className="min-h-screen bg-slate-800">
            <Header header={"Where To Eat"}/>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-row w-full place-content-evenly">
                <Lists baseUrl={url}/>
            </div>
        </div>
    )
}