import React, {Component} from 'react';

class UsersAddress extends Component {
    render() {
        let {user} = this.props;
        return (
            <div>
                {user.id} - {user.name} - {user.age} - {user.status.toString()} - {user.address.city} - {user.address.street} - {user.address.number}
            </div>
        );
    }
}

export default UsersAddress;