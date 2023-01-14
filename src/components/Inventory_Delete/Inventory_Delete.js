import "./Inventory_Delete.scss";

function Inventory_Delete() {
    return(
        <>
            <p>Delete (Television) inventory item?</p>
            <p>Please confirm that you'd like to delete Television from the inventory list. You won't be able to undo this action</p>
            <button>Cancel</button>
            <button>Delete</button>
        </>
    );
}

export default Inventory_Delete;