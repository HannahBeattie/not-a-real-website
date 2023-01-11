# Not-a-real-site

### About

Not-a-real-site is a Next.js application that demonstrates how a headless CMS can be used to manage and display dynamic content.

### Under the hood

1. Next.js
2. Graphql
    - To query our headless CMS
3. Contentful
    - Our headless CMS used to store content
4. Chakra UI
    - To create accessable components
5. Framer Motion
    - For small animations, such as page transitions

### Getting Started

1. To use this application as a template, you will need to first sign up to Contentful and create a content model.

    - In this example, you can see which content fields are used, but looking at the api file
        - See: components/lib/api.js
    - The name of the content model I am using in this app is 'fakeAlbum'
    - You may like to change the name of the content model, or the fields
        - Remember to alter the graphql queries accordingly

2. Clone the repository and run npm install from your command line.

3. Create a '.env.local' file in your cloned repository and use it to store your Contentful access tokens, id and key.

    - ie.
        - CONTENTFUL_SPACE_ID = YOUR_ID_GOES_HERE ect.
    - Your preview and access tokens will be used by graphql to query contentful
        - See: components/lib/api.js, line 10 & 11

4. Run 'npm run dev' from your command line.

### Navagating the code

1. You will find an example of dynamic routing by navagating to the 'pages/gallery/[slug].js' file.

    - The site context and api querries are located in the lib folder
    - You may like to uncomment the console.log comments to see the flow of data from query to render

2. You will find an example of an image from contentful being passed to a card component as a cover photo by navagating to 'pages/gallery.js'

3. You will find an example of the same layout props being used with diffirent content by navating to either of the services pages.
    - ie.'services/one.js'.

# The rest of the app contains various templates and components that could easily be used with dynamic content.
