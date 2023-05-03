export default function Filterbutton({ themes, setTheme }) {

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        const formSorted = formJson.sort;

        // console.log(formSorted)
        setTheme(formSorted);

    }

    return (
        <form onSubmit={handleSubmit}>
            <select name="sort">
                <option value="All">All</option>
                {themes.map(theme => <option key={theme}>{theme}</option>)}
            </select>
            <button className="filter-button">Filter</button>
        </form>
    );
}