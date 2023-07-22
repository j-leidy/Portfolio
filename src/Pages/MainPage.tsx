import { MobileMenu } from "../Components/Nav/NavBar";
import { WelcomeScreen } from "../Components/Welcome/WelcomeScreen";
import { useAppSelector } from "../Hooks/Hooks";
import { selectShowMainPageState } from "../Redux/PageSlice/PageSlice";

export const MainPage = () => {
    const showMainPage = useAppSelector(selectShowMainPageState);
    return (
        <>
            {showMainPage ? (
                <>
                    <MobileMenu />
                    Main page showing
                </>
            ) : (
                <WelcomeScreen />
            )}
        </>
    );
};
