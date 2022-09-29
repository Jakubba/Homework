import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React from "react";
import { connect } from "react-redux";

const ActorContainer = ({ actors }) => {
    return (
        <ul>
            {actors.list.map((actor) => (
                <li>{actor}</li>
            ))}
        </ul>
    );
}

const mapStateToProps = (state) => ({
    actors: state.actors,
});

export default connect(mapStateToProps,{})(ActorContainer);