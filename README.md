# What this is about
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It's a small planning poker app, where users can create games and join a game.
The cretaor of the game is the administrator who can reveal the votes and its average.
Other players can join via the games code.

**This is only a POC**
If I find the time, I will improve styling, security and many other aspects. This is not an application that should be used in production.

## Getting Started

Make sure you have node version 16.x installed.

After cloning the project run
```bash
npm install
```

Then, you can run the development server via:
```bash
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Remarks
The data storage currently only is in Memory in a JS Map.
Due to this, all progress is lost when the app rebuilds/restarts.
It is not recommended to start the app with npm run dev, because recompilation is triggered automatically very often, even if code does not change.
This leads to the Map being emptied and the app cannot be used normally.

So for now, use
```bash
npm run build
npm run start
```

to run a production build. This stores your data for longer.
This is a POC, so there are no strict plans on adding a persistent storage solution, which would fix this problem. 
For now, this is sufficient enough.
