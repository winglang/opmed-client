import {StarIcon} from '@heroicons/react/24/solid';
export interface ListItem {
    name: string;
    description: string;
    rating: number;
    imageUrl?: string;
}
export interface ListProps {
    items: ListItem[];
    actionButton?: {
        icon: JSX.Element,
        title: string,
        onClick: (item: ListItem) => void
    }
}
export const List = ({items, actionButton} : ListProps) => {
    return (
        <ul className="divide-y divide-slate-100">
            {items.map((item, index: number) => (
                <li key={item.name + index} className="flex justify-between gap-x-6 py-5">
                    <div className="hidden sm:flex sm:flex-col sm:items-start">
                        <p className="text-sm leading-6 text-slate-50">Name</p>
                        <div className={"flex flex-row min-w-[300px] w-full mt-1"}>
                            <p className="text-sm font-semibold leading-6 text-slate-50">{item.name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-slate-50">{item.description}</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-slate-50">Rating</p>
                        <div className={"flex flex-row place-content-evenly w-full mt-1"}>
                            <p className="text-xs leading-5 text-slate-50">
                                {item.rating}
                            </p>
                            <StarIcon className={"w-4 text-yellow-500"}/>
                        </div>
                    </div>
                   
                </li>
            ))}
        </ul>
    )
}

