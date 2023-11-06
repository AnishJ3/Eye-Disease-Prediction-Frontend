 const Sidebar = ({handleChange}) =>{

    return(
        <>
        <div className="sidebar">
            <div className="upload">
                <button type="submit" id="1" onClick={handleChange}>Patient Records</button>
            </div>
            <div className="upload">
                <button type="submit" id="2" onClick={handleChange}>Upload image</button>
            </div>

            

        </div>
        </>
    )
}

export default Sidebar;