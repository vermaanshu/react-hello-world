import React from "react";

export default class Like extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likesCount: 0
        };
        this.onLike = this.onLike.bind(this);
    }

    onLike() {
        const newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount: newLikesCount});
    }

    render() {
        console.log("do something");
        return (
            <div>
                # Likes :
                <span>{this.state.likesCount}</span>
                <div>
                    <button onClick={this.onLike}>Like this?</button>
                </div>
            </div>
        );
    }

}
