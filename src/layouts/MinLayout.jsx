import Header from "../widgets/Header/index";

function MinLayout({ children, activeList, setActiveList }) {
    return (
        <>
            <Header activeList={activeList} setActiveList={setActiveList} />
            <main>{children}</main>
        </>
    );
}

export default MinLayout;
