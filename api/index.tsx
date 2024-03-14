import { Button, Frog } from 'frog'
import { handle } from 'frog/vercel'

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  basePath: '/api',
})

const SITE_URL = 'http://localhost:5173'

app.frame('/', (c) => {
  const { buttonValue } = c

  if (buttonValue === 'frame-6') {
    return c.res({
      image: `${SITE_URL}/img/buidlguidl.jpg`,
      intents: [
        <Button.Link href="https://github.com/scaffold-eth/scaffold-eth-2">
          🛠️ GitHub
        </Button.Link>,
        <Button.Link href="https://docs.scaffoldeth.io/">📃 Docs</Button.Link>,
        <Button.Link href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA">
          💬 Telegram
        </Button.Link>,
      ],
    })
  }

  if (buttonValue === 'frame-5') {
    return c.res({
      image: `${SITE_URL}/img/frame-5.png`,
      intents: [
        <Button value="frame-4">← Back</Button>,
        <Button value="frame-6">Next →</Button>,
      ],
    })
  }

  if (buttonValue === 'frame-4') {
    return c.res({
      image: `${SITE_URL}/img/frame-4.png`,
      intents: [
        <Button value="frame-3">← Back</Button>,
        <Button value="frame-5">Next →</Button>,
      ],
    })
  }

  if (buttonValue === 'frame-3') {
    return c.res({
      image: `${SITE_URL}/img/frame-3.png`,
      intents: [
        <Button value="frame-2">← Back</Button>,
        <Button value="frame-4">Next →</Button>,
      ],
    })
  }

  if (buttonValue === 'frame-2') {
    return c.res({
      image: `${SITE_URL}/img/frame-2.png`,
      intents: [
        <Button value="frame-1">← Back</Button>,
        <Button value="frame-3">Next →</Button>,
      ],
    })
  }

  return c.res({
    image: `${SITE_URL}/img/frame-1.png`,
    intents: [<Button value="frame-2">Next →</Button>],
  })
})

export const GET = handle(app)
export const POST = handle(app)
