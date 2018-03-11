var Contacts = React.createClass({
    propTypes: {
        items:React.PropTypes.array.isRequired,
    },
    render: function() {
        var contacts = this.prop.items.map(function(contact) {
            return React.createElement(Contact, {item: contact, key: contact.id});
        });
        
        return (
            React.createElement('ul', {className:'contactList'}, contacts)
        );
    }
});