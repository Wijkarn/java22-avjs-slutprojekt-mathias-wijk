export default function Filterbutton({ themes, setTheme }) {

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        const formFiltered = formJson.filter;
        
        setTheme(formFiltered);

    }

    return (
        <form onSubmit={handleSubmit}>
            <select name="filter">
                <option value="All">All</option>
                {themes.map(theme => <option key={theme} value={theme}>{theme}</option>)}
            </select>
            <button className="sort-filter-button">Filter</button>
        </form>
    );
}