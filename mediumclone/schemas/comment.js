export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            title: 'Approved',
            name: 'approved',
            type: 'boolean',
            description: `Comments wont't show on the site without approval`,
            initialValue: true
        },
        {
            name: 'email',
            type: 'string'
        },
        { name: 'comment', type: 'text' },
    {
            name: 'post',
            type: 'reference',
            to: [{ type: 'post' }]
        }
    ]
}