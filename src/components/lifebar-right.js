import React from "react";
import {Link} from "react-router-dom";
import {RED, YELLOW, PURPLE} from "../content/color";
import LifeCircle from "./LifeCircle";

class LifebarRight extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'wrapper'}>
                <Link to={`/home?room=kitchen`}>
                    <LifeCircle value={this.props.value.food}
                                nameValue={"Питание"}
                                color={this.props.value.food > 20 ? YELLOW : RED}/>
                </Link>

                <Link to={`/home?room=bedroom`}>
                    <LifeCircle value={this.props.value.sleep}
                                nameValue={"Сон"}
                                color={this.props.value.sleep > 20 ? PURPLE : RED}/>
                </Link>
            </div>

        );
    }
}

export default LifebarRight;