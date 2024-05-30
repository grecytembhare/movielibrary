
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
import { signUpWithEmailPassword, signUpWithGithub, signUpWithGoogle } from '@/config/auth';
import { useState } from 'react';
import googleSvg from '../../assets/svgs/googleUpdatedSvg.svg';
import gitHubSvg from '../../assets/svgs/githubSvgUpdated.svg';

function SignupForm() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const routueName = '/user'
	const navigate = useNavigate();
	const handleSignUpWithEmail = async () => {
		const user = await signUpWithEmailPassword(email, password, firstName, lastName);
		if (user) {
			navigate(routueName)
		}
	}

	const handleSignUpWithGooogle = async () => {
		const user = await signUpWithGoogle();
		if (user) {
			navigate(routueName)
		}
	}
	const handleSignUpWithGitHub = async () => {
		const user = await signUpWithGithub();
		if (user) {
			navigate(routueName)
		}
	}
	return (
		<Card className="mx-auto max-w-sm mt-20">
			<CardHeader>
				<CardTitle className="text-xl">Sign Up</CardTitle>
				<CardDescription>
					Enter your information to create an account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="grid gap-2">
							<Label htmlFor="first-name">First name</Label>
							<Input id="first-name"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								placeholder="Max" required />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="last-name">Last name</Label>
							<Input id="last-name"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								placeholder="Robinson" required />
						</div>
					</div>
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
						<Label htmlFor="password">Password</Label>
						<Input id="password" type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="*******"
							required
						/>
					</div>
					<Button type="submit" onClick={handleSignUpWithEmail} className="w-full">
						Create an account
					</Button>
					<Button variant="outline" onClick={handleSignUpWithGooogle} className="w-full bg-white text-gray-800 hover:bg-red-500 hover:text-white gap-2">
						<span>
							Login with
						</span>
						<img src={googleSvg} alt="Google Logo" width='24px' height='30px' />
					</Button>
				
				</div>
				<div className="mt-4 text-center text-sm">
					Already have an account?{" "}
					{/* <button href="#" className="underline">
            
          </button> */}
					<Link className="underline" to="/login">log in</Link>
				</div>
			</CardContent>
		</Card>
	)
}

export default SignupForm;