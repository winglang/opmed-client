import {Header} from "./Header";
import {Lists} from "./Lists";
// import {useConfig} from "./use-config";

export const Layout = () => {

    // const {data: config} = useConfig();

    return (
        <div className="min-h-screen bg-slate-800">
            <Header header={"Where To Eat"}/>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-row w-full place-content-evenly">
                <Lists baseUrl={"http://127.0.0.1:54379"}/>
            </div>
        </div>
    )
}