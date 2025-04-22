interface Properties {
    children: React.ReactNode;
    title?: string;
    classes?: string;
    [key: string]: any;
}

export default function Panel({ children, title, classes, ...rest }: Properties) {
    const classList = `p-4 rounded-lg bg-slate-100/75 ${classes?.length ? classes : ""}`;

    return (
        <div className={classList} {...rest}>
            {title && <strong className="block mb-3 text-sm leading-none font-semibold text-slate-400 select-none">{title}</strong>}
            {children}
        </div>
    );
}