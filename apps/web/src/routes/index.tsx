import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="w-full min-h-svh flex items-center justify-center">
			<h1>Hello there</h1>
		</div>
	);
}
