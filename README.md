## Getting Started

First, follow Notions [getting started guide](https://developers.notion.com/docs/getting-started) to get a `NOTION_TOKEN` and a `NOTION_DATABASE_ID`, then add them to a file called `.env.local`.

```
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

Install dependencies

```bash
npm install
# or
yarn
```

Start the server with

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

### Netlify CMS Integration

https://www.netlifycms.org/docs/intro/

Please note, Netlify CMS is configured only for localhost. As of today Netlify’s Git Gateway service currently supports GitHub and GitLab repositories connected to Netlify for Continuous Deployment. Repositories in Bitbucket and self-hosted repositories are not yet supported by this feature.

working with local git repository

```
npx netlify-cms-proxy-server
```

and then

```
yarn dev
```

The CMS can be accessed from

http://localhost:3001/admin/index.html
