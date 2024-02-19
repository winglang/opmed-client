import {Title} from "./Title";
import {List, ListItem} from "./List";
import {BookmarkIcon} from "@heroicons/react/24/solid";
import {useApi} from "./use-api";

export interface ListsProps {
    baseUrl: string;
}
export const Lists = ({baseUrl}: ListsProps) => {

    const {useListRecommended} = useApi({baseUrl});
    const {data: recommended} = useListRecommended();

    return (
        <>
            <div className="px-4 py-6 sm:px-0 flex flex-col">
                <Title title={"Recommended"}/>
                <List items={recommended?.data?.restaurants ?? []}/>
            </div>
        </>
    )
}