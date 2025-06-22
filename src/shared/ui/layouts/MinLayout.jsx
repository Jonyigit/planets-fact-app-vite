import Header from "../../../widgets/Header/index";

function MinLayout(props) {
    const { children, activeList, setActiveList } = props;
    return (
        <>
            <Header activeList={activeList} setActiveList={setActiveList} />
            <main>{children}</main>
        </>
    );
}

export default MinLayout;
