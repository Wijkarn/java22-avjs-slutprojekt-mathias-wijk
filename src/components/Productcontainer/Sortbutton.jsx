import _ from "underscore";

export default function SortButton({products, setProducts}){

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        const formSorted = formJson.sort;
        
        let sortedProducts;

        if(formSorted.includes("-desc")){
            const sort = formSorted.replace("-desc", "");
            sortedProducts =  _.sortBy(products, sort).reverse();
        }
        else{
            const sort = formSorted.replace("-asc", "");
            sortedProducts =  _.sortBy(products, sort);
        }

        setProducts(sortedProducts);
    }

    return (
        <form onSubmit={handleSubmit}>
            <select name="sort">
                <option value="theme-asc">Theme (asc)</option>
                <option value="theme-desc">Theme (desc)</option>
                <option value="price-asc">Price (asc)</option>
                <option value="price-desc">Price (desc)</option>
                <option value="price-asc">Pieces (asc)</option>
                <option  value="price-desc">Pieces (desc)</option>
            </select>
            <button className="sort-filter-button">Sort</button>
        </form>
    );

}