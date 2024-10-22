import Link from "next/link";

export default function Home() {
    return (
        <ul>
            <li>
                <Link href={'/sign-up'}>Sign up</Link>
            </li>
            <li>
                <Link href={'/sign-in'}>Sign in</Link>
            </li>
            <li>
                <Link href={'/forgot-password'}>Forgot password</Link>
            </li>
            <li>
                <Link href={'/create-new-password'}>Create new password</Link>
            </li>
            <li>
                <Link href={'/expired-link'}>Expired link</Link>
            </li>
        </ul>
    );
}
