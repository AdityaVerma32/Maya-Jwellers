import SubHeader from '../../../Components/Admin/SubHeader'

function Categories() {

    const handleOnFilter = () => {
        console.log('Filter clicked')
    }

    const handleOnSearch = (searchTerm) => {
        console.log('Search term:', searchTerm)
    }

    const handleAddNew = () => {
        console.log('Add new category clicked')
    }

    return (
        <div>
            {/* Sub-header for Categories */}
            <SubHeader
                title="Categories"
                onAddNew="add"
                onFilter={handleOnFilter}
                onSearch={handleOnSearch}
            />

            {/* Categories content placeholder */}
            <div>
                <p>This is the Categories section.</p>
                {/* You can replace this with a table or card grid of categories */}
            </div>
        </div>
    )
}

export default Categories