<p align="center"><img src="icon.webp" alt="pi-headroom icon" width="160"></p>

# pi-headroom

Routes Pi's OpenAI and Anthropic providers through a local [Headroom](https://github.com/headroomlabs-ai/headroom) proxy.

## Install

```bash
pi install git:github.com/fmguerreiro/pi-headroom
npm install --global @fmguerreiro/pi-headroom
pi-headroom
```

`pi install` loads the extension. `pi-headroom` starts the proxy when needed, then launches Pi with proxy routing enabled.

Install Headroom first:

```bash
pip install "headroom-ai[proxy]"
```

## Configuration

| Variable | Default | Purpose |
| --- | --- | --- |
| `PI_HEADROOM_PORT` | `8787` | Local proxy port. |
| `PI_HEADROOM_URL` | `http://127.0.0.1:8787` | Proxy URL when launching Pi directly. |

For a provider without Headroom's default upstream mapping, configure its upstream through Headroom before use.

## License

MIT
