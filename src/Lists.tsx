import {Title} from "./Title";
import {List, ListItem} from "./List";
import {BookmarkIcon} from "@heroicons/react/24/solid";
import {useApi} from "./use-api";

export interface ListsProps {
    baseUrl: string;
}
export const Lists = ({baseUrl}: ListsProps) => {

    const {useAddFavorite, useListFavorites, useListRecommended} = useApi({baseUrl});
    const {data: favorites} = useListFavorites();
    const {data: recommended} = useListRecommended();
    const {mutate} = useAddFavorite();

    const onBookmarkClick = (item: ListItem) => {
        mutate(item);
    }

    return (
        <>
            <div className="px-4 py-6 sm:px-0 flex flex-col">
                <Title title={"Recommended"}/>
                <List items={recommended?.data?.restaurants ?? []}
                      actionButton={{
                          icon: <BookmarkIcon className={"text-slate-50 w-4 hover:text-sky-600 cursor-pointer"}/>,
                          title: "Add to favorite",
                          onClick: onBookmarkClick
                      }}/>
            </div>
        </>
    )
}