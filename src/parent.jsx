import NavBar from "./headBar";

const Parent = () => {
    let scrollDown = () => {
        let parent = document.getElementById('parent');
        parent.scrollTo({
            top: 600, // Scroll to 600px from the top
            behavior: 'smooth', // Enable smooth scrolling
        });
    };
    return (
        <div
            id="parent"
            style={{
                height: '100vh',
                paddingBottom: '20px',
                overflowY: 'scroll',
                overflowX: 'hidden',
            }}
        >
            <NavBar scrollDown={scrollDown} />
            {/* Add content to make it scrollable */}
        </div>
    );
};

export default Parent;
