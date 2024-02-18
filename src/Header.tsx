export interface HeaderProps {
    header: string;
}
export const Header = ({header}: HeaderProps) => {
    return (
        <div className="app-header">
            <h1 className="heading text-slate-50">{header}</h1>
        </div>
    )
}