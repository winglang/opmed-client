export interface TitleProps {
    title: string;
}
export const Title = ({title} : TitleProps) => {
    return (
        <section className="title-wrapper">
            <div className="top">{title}</div>
            {/*<div className="bottom" aria-hidden="true">{title}</div>*/}
        </section>
    )
}