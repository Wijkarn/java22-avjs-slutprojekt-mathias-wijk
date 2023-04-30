export default function Sortbutton({themes}) {


    return (

        <select name="sort">
            <option value="All">All</option>
            {Object.keys(themes).map(theme => <option key={theme}>{theme}</option>)}
        </select>

    );
}