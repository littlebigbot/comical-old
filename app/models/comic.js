App.Comic = DS.Model.extend({
    id              : DS.attr(),
    date            : DS.attr(),
    title           : DS.attr(),
    subtitle        : DS.attr(),
    image           : DS.attr(),
    thumbnail       : DS.attr(),
    hover_text      : DS.attr(),
    author_id       : DS.attr(),
    writeup         : DS.attr(),
    comments_id     : DS.attr(),
    issue_number    : DS.attr(),
    number          : DS.attr(),
    exerpt          : DS.attr(),
    hidden          : DS.attr(),
    slug            : function(){
                        return this.get('title').replace(' ', '-').toLowerCase().substr(0,32);
                      }.property('title')
});

App.User.FIXTURES = [
    {
        id: 1,
        date: 'Mon, 26 Aug 2013 20:23:43 GMT',
        title: 'There aren\'t any fish left, you bastard',
        subtitle: 'You bastard',
        image: 'blerg/terg.png',
        hover_text: 'sup?'
    },
    {
        id: 2,
        date: 'Mon, 27 Aug 2013 20:23:43 GMT',
        title: 'Oh, the fish are right there',
        subtitle: 'Sorry about that',
        image: 'blerg/terg.png',
        hover_text: 'sup?'
    }
];