import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { signInWithEmailPassword, signInWithGithub, signInWithGoogle } from '@/config/auth';
import googleSvg from '../../assets/svgs/googleUpdatedSvg.svg';
import gitHubSvg from '../../assets/svgs/githubSvgUpdated.svg';
function LoginForm() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleAuthWithEamail = async () => {

		const user = await signInWithEmailPassword(email, password)
		if (user) {
			navigate('/user');
		}
		// login()
		console.log('Submit button clicked!');
	};

	const handleAuthWithGooogle = async () => {
		const user = await signInWithGoogle()
		if (user) {
			navigate('/user')
		}
	}

	const handleAuthWithGithub = async () => {
		const user = await signInWithGithub();
		if (user) {
			navigate('/user')
		}
	}


	return (

		<Card className="mx-auto max-w-sm mt-20">
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Enter your email below to login to your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							value={email} onChange={(e) => setEmail(e.target.value)}
							placeholder="m@example.com"
							required
						/>
					</div>
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
							<button href="#" className="ml-auto inline-block text-sm underline">
								Forgot your password?
							</button>
						</div>
						<Input
							id="password"
							type="password"
							placeholder="*********"
							value={password} onChange={(e) => setPassword(e.target.value)}
							required />
					</div>
					<Button type="submit" onClick={handleAuthWithEamail} className="w-full">
						Login
					</Button>
					<Button variant="outline" onClick={handleAuthWithGooogle} className="w-full bg-white text-gray-800 hover:bg-red-500 hover:text-white gap-2">
						<span>
							Login with
						</span>
						<img src={googleSvg} alt="Google Logo" width='24px' height='30px' />
					</Button>
					
				</div>
				<div className="mt-4 text-center text-sm">
					Don&apos;t have an account?{" "}

					<Link className="underline" to="/signup">Sign Up</Link>

				</div>
			</CardContent>
		</Card>

	)
}
export default LoginForm;