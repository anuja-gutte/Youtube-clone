import "./SidebarRow.css"
function SidebarRow({selected,Icon,title}){
    return(

        <div className={`SidebarRow ${selected && "selected"}`}>
            <Icon className="icon"/>
                <h2 className="sidebar_title">{title}</h2>
            
            
        </div>

    );
}


export default SidebarRow;