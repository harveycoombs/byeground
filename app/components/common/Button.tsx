import Link from "next/link";

interface Properties {
    children: React.ReactNode;
    url?: string;
    classes?: string;
    loading?: boolean;
    [key: string]: any;
}

export default function Button({ children, url, classes, loading, ...rest }: Properties) {
    const classList = `py-3 px-4 rounded-md leading-none font-medium text-[0.8rem] text-white duration-150 cursor-pointer bg-pink-500 hover:bg-pink-600 active:bg-pink-700 ${classes?.length ? classes : ""}`;
    return url?.length ? <Link href={url} className={classList} {...rest}>{children}</Link> : <button className={classList} {...rest}>{children}</button>;
}