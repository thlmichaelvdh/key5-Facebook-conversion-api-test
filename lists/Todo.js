const { Text } = require('@keystonejs/fields');

module.exports = {
    schemaDoc: 'Todo',
    fields: {
        name: {type: Text, isUnique: true }
    },
    adminConfig: {
        defaultColumns: 'name',
        defaultSort: 'name',
    },
}
