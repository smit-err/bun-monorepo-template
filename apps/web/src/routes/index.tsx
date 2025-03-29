import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@org/ui/components/button";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="w-full min-h-svh flex items-center justify-center">
			<div className="max-w-sm w-full flex flex-col items-center gap-3">
				<h1 className="text-4xl font-semibold tracking-tight">Hello there</h1>
				<Button className="w-full">Hello</Button>
			</div>
		</div>
	);
}
