import { onAuthStateChanged } from "firebase/auth"
// Dashboard.jsx
import {
	Bell,
	CircleUser,
	Home,
	LineChart,
	Menu,
	NotebookPen,
	Package,
	Package2,
	Search,
	ShoppingCart,
	Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import NotesList from "@/components/Notes/NotesList"
import {
	Outlet,
	Link,
	useNavigate,

} from "react-router-dom";
// import NotesBoard from "@/components/Dashboards/NotesBoard"
// import useNotes from "@/hooks/useNotes"
import { auth } from "@/config/firebase"
import { useEffect } from "react"

// { console.log(routes) }
function Dashboard() {
	// const { addNote } = useNotes();
	// const history = useHistory();
	const navigate =  useNavigate();
	useEffect(() => {
		
		const unsubscribe = onAuthStateChanged(auth, (user) => {
		  if (!user) {
			// User is not signed in, redirect to login page
			navigate('/login');
		  }
		});
	
		
		return () => unsubscribe();
	 }, [navigate]); // Depend on history to ensure the effect runs when the component mounts
	
	
	return (
		<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<div className="hidden border-r bg-muted/40 md:block">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
						<Button href="/" className="flex items-center gap-2 font-semibold">
							<NotebookPen className="h-6 w-6" />
							<span className="">Movie Library</span>
						</Button>

						<Button variant="outline" size="icon" className="ml-auto h-8 w-8">
							<Bell className="h-4 w-4" />
							<span className="sr-only">Toggle notifications</span>
						</Button>
					</div>
					<div className="flex-1">
						<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
							<Link
								to="/user/search"
								
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<Home className="h-4 w-4" />
								Search
							</Link>
							<Link
								to="/user/playlist"
								
								href="#"
								className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<Home className="h-4 w-4" />
								playlist
							</Link>
							
						</nav>
					</div>
					
				</div>
			</div>
			<div className="flex flex-col">
				<header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="shrink-0 md:hidden"
							>
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						{/* side navigation */}
					
					</Sheet>
					
					<div className="w-full flex-1">
						
					</div>
					{/* user */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="secondary" size="icon" className="rounded-full">
								<CircleUser className="h-5 w-5" />
								<span className="sr-only">Toggle user menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>
				{/* main area */}
				<Outlet />

			</div>
		</div>

	)
}

export default Dashboard;