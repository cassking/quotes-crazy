# README

# Quotes-crazy

#### small app using React with Rails 5.1 and built-in Webpacker, axios, react-router, query-string

## Stacks

- ruby 2.3.3
- rails 5.2.0
- react-rails
- @rails/webpacker 4.0.0-pre.2
- node >=6.0.0
- npm 5.7.1
- react ~15.4.2
- react-dom ~15.4.2
- react-router-dom ^4.2.2

[ DEMO here ]https://quotescrazy.herokuapp.com/

##Phase 1 and 2
Phase 1 will be simply getting random quotes via a seed file via a next and prev link

Phase 2 will be getting quotes directly from the `andruxnet-random-famous-quotes` api via links and using location history to move next and previous

#why the TLDR readme?
because axios, Router and query-string Im not so comfy with so i figured, but explaining it long-hand, i would understand it myself better and maybe help someone else grok it as well

#why Axios?
I am experimenting using the axios  to do the requests. I discovered that it is a tad easier to get the data with axios than fetch ( you can read about it here https://medium.com/@sahilkkrazy/fetch-vs-axios-http-request-c9afa43f804e). Im also using query-string axios. Apparently, for web stuff try using axios, but if using React native, fetch seems to be a better fit.

#To run locally
`yarn`
`bundle install`
make sure you have `foreman` installed
( yeah just discovered the magic of foreman and a Procfile combo!)
(`gem install foreman`) https://github.com/ddollar/foreman
`foreman start -f Procfile.dev -p 3000`
(this will start both you rails and your webpack servers all at once)

# How this app is wired in the backend
On the Rails backend side, the static_pages controller which is set as `root` in the routes.rb file.

The correspondent view renders a `<div id="quotes">` in the index.html.erb file which speaks to the React js part of the app.

The `Quote` model in quote.rb we handle the `text` and `author` fields. the model also handles the `next_id` and `previous_id` methods.

#a Rails and virtual attributes aside
In assembling this I learned just a bit about Rails virtual attributes. If you peek at `quote.rb` you will see two
methods and basically they define two methods to find next and previous where we are only plucking  (example `Model.where('id < (?)', [array of values]`) or (`Model.where('id > (?)', [array of values]`)
Pluck method gives us an array of values of ids , then we grab either first or last.


The `QuotesController` namespaced under /api provides the show REST action so we can make a `GET` request to say `/api/quotes/12`. Return a JSON representaion of the quote using `jbuilder ` (a gem already part of Rails). Setting the default format as `json ` routes.rb(`  namespace :api, defaults: { format: :json } do
`) allows to not have to specify .json in the GET request.

# How this app is wired in the front end

With webpack you can do something like this `<%= javascript_pack_tag 'quotes' %>
` in your .erb file to 'drop in' a js pack into an html view (just some magic im not sure how that works :)   ).


#React and the views

The `quotes.js` file has one line `import 'quotes'`. This little file  just tells Webpacker to use `/index.js` in the corresponding `/quotes` folder. So `quotes.js` calls `/quotes/index.js`


`index.js` is where we import `react` and `react-dom` and the main App component.

Here is where it gets interesting for me.  In `App`, and I confess, Im  not comfortable with `Router` .... this is a main part of this app. It renders React components depending on the current URL in the browser. App is just a wrapper for Router and passes the `startingQuoteId` as prop down through Router and Route down to `QuotesDisplay`.

The Router tracks the browser address, renders a route based on that, that route then renders `QuotesDisplay`. The Router props are handed down to QuotesDisplay via `{...routeProps}` and the `firstQuoteId`

just a quick note on this syntax `{...props}`: just using the spread operator
read more here https://reactjs.org/docs/components-and-props.html

#QuotesDisplay Component and the Lifecycles used

The `QuotesDisplay` component is rendered by App.js; well, technically it is rendered by the `Route` that is rendered by the `Router`. The Router is actually being exportes in App via `export default App`.

 The first thing that happens before even `QuotesDisplay`is rendered  is the constructor  runs.(first time around `this.state.quote` is empty so nothing is rendered)

after that, the QuotesDisplay component is rendered on the DOM via `componentDidMount()` when page is loaded.  The page renders with different props as the next or previous links are clicked and this is where `componentWillReceiveProps(nextProps)` comes in handy.

The links are actually React components that can make for shareable links iwth a unique URL.

`setQuoteIdFromQueryString()` parses the query string (axios query-string) and stores the id of the quote as `quoteId`. Im learning that the Route object serves a number of props via the Route via `this.props.location` including `hash:,key:,pathname:,search:,state:`. in this case use the `search` property of that object.

the GET request is made via axios and it targets the quote id set prior as `quoteID`, and once the promise is resolved `setState()` saves the quote object from JSON on the quote property of the component state via `this.state.quote`
