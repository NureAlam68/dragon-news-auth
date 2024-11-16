import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";


const NewsDetails = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto mt-[30px] grid grid-cols-12 gap-6">
                <section className="col-span-9"></section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;