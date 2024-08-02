import Image from "next/image";
import { Link } from "@/components/Link"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-12 gap-5">
			<div className="flex flex-col items-center space-y-4">
				<h1 className="text-4xl font-bold"> Learn about Next.js</h1>
				<p className="text-xl">ようこそ。ここではNext.js、またReactについてを学べるところです。<br />様々なケースを見て、実践力を付けて行こう。</p>
			</div>
			<div className="flex flex-col items-center py-10">
				<Link href="/tutorial" className="h-[100px] w-[200px] border border-1 rounded-xl flex justify-center items-center text-2xl font-bold">
					早速始める！
				</Link>
			</div>
		</main>
	);
}
