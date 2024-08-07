const Filter= (props) => {
    const {filter, handleFilterChange} = props;
    return (
        <>
        filter shown with 
        <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Filter by name or number"
        />
   </>)
}
export default Filter;