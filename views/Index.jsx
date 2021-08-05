const React = require('react');

class Index extends React.Component {
    render() {
        return(
            <div className="Index">
                <h1 className="title">Motivational To Do List</h1>
                <h3 className="quote">inspirational quotes fetched from api will go here</h3>
                <div className="list_container">
                    <ul>
                        {
                            this.props.items.map((item, i) => {
                                return(
                                    <li>
                                        <input type="checkbox" id="completed" name="completed" value={item.completed}>
                                            {item.quantity} {item.name}
                                        </input>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}