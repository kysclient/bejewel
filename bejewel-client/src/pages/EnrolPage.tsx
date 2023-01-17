import {Enrol} from "../components/Enrol";
import {Header} from "../layout/header/Header";

export default function EnrolPage(): JSX.Element {
    return (
        <>
            <Header/>
            <div className="flex min-w-full justify-center items-center p-8">
                <Enrol/>
            </div>
        </>
    )
}