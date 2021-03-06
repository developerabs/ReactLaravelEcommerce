import React, {Component,Fragment} from 'react';

class MegaMenu extends Component {

    constructor() {
        super();
    }


    MenuItemClick=(event)=>{
        event.target.classList.toggle("active");
        let panel=event.target.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }
        else{
            panel.style.maxHeight=panel.scrollHeight+ "px"
        }
    }


    render() {
        const MyList = this.props.data;
        const MyView = MyList.map((ParentList,i)=>{
            return <div key={i,toString()}>
                 <button onClick={this.MenuItemClick} className="accordion"> <img className="accordionMenuIcon" src={ParentList.ParentCategoryImg}/>{ParentList.ParentCategoryName}</button>
                    <div className="panel">
                        <ul>
                            {
                                (ParentList.SubCategory).map((ChildList,i)=>{
                                    return <li key={i.toString()}><a href="#" className="accordionItem">{ChildList.cat2_name}</a></li>
                                })
                            }
                        </ul>
                    </div>
            </div>
        })
        return (
            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">

                   {MyView}

                </div>
            </div>
        );
    }
}

export default MegaMenu;