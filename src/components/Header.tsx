import {Logo} from "@/components/Logo";
import {A} from "@/components/A";

export const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4">
            <A href={'/'}>
                <Logo/>
            </A>
        </header>
    );
};