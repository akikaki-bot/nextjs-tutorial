import { Link } from "./Link";


export function PageNavigation({
    previousPage = "#",
    nextPage = "#",
    previousPageTitle = "前はありません",
    nextPageTitle = "続きはありません",
} : {
    previousPage: string,
    nextPage: string,
    previousPageTitle: string ,
    nextPageTitle: string,
}) {
    return (
        <div className="flex justify-between">
            <Link href={previousPage} className="text-blue-500 no-underline">
                〈  &nbsp;{previousPageTitle}
            </Link>
            <Link href={nextPage} className="text-blue-500 no-underline">
                {nextPageTitle}&nbsp; 〉
            </Link>
        </div>
    )
}