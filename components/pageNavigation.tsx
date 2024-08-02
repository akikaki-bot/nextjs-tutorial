import { Link } from "./Link";


export function PageNavigation({
    previousPage,
    nextPage,
    previousPageTitle,
    nextPageTitle,
} : {
    previousPage: string,
    nextPage: string,
    previousPageTitle: string,
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