import "./styles/ItemListContainer.css"

const ItemListContainer = ( {greeting} ) => {

    return (
        <div className="item-list-container">
            <h2 className="item-list-container-title">{greeting}</h2>
        </div>
    )
}

export default ItemListContainer