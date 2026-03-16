# User Agent Parser

Parse any User Agent string to identify browser, rendering engine, operating system, OS version, and device type, with auto-detection of the current browser's UA, entirely in the browser.

**Live Demo:** https://file-converter-free.com/en/network-tools/user-agent-parser

## How It Works

`parseUA(ua)` applies five ordered detection passes. Browser detection uses a priority chain of regexes: `Edg[e/]` (Edge), `OPR/` (Opera), `Vivaldi/`, `YaBrowser/`, `SamsungBrowser/`, `UCBrowser/`, `Firefox/`, `Chrome/`, `Safari/` + `Version/` (Safari), `MSIE` and `Trident.*rv:` (IE). Engine detection identifies Gecko (Firefox UA check), WebKit/Blink (`AppleWebKit/`), Trident, or Presto. OS detection maps Windows NT versions to readable names (10.0→10/11, 6.3→8.1, etc.), then Android, iOS (`iPhone OS` / `iPad.*OS`), Chrome OS (`CrOS`), macOS (`Mac OS X`), and Linux. Device detection classifies as Mobile (Mobile/iPhone patterns), Tablet (iPad/Android without Mobile), Bot/Crawler (`bot|crawl|spider|Googlebot`), or Desktop. The textarea is pre-populated with `navigator.userAgent` and parsed immediately on load; the user can paste any custom UA string to parse.

## Features

- 10-browser priority detection chain (Edge, Opera, Vivaldi, Yandex, Samsung, UC, Firefox, Chrome, Safari, IE)
- 4-engine detection: Gecko, WebKit/Blink, Trident, Presto
- OS detection: Windows (XP/Vista/7/8/8.1/10/11), macOS, Android, iOS, Chrome OS, Linux
- Device classification: Mobile, Tablet, Bot/Crawler, Desktop
- Auto-populates with `navigator.userAgent` on load
- Parse button and Enter key support for custom UA strings
- Raw UA display alongside parsed result cards

## Browser APIs Used

- Navigator API (`navigator.userAgent`)

## Code Structure

| File | Description |
|------|-------------|
| `user-agent-parser.js` | `parseUA(ua)` with 5 detection passes (browser/engine/OS/device), `render(ua)` card builder, auto-load from `navigator.userAgent`, parse button and Enter key handler |

## Usage

| Element ID / Selector | Purpose |
|----------------------|---------|
| `#uaInput` | User Agent string input (pre-filled with current UA) |
| `#uaParse` | Parse button |
| `#uaCards` | Result cards (Browser, Engine, OS, Device Type) |
| `#uaRaw` | Raw User Agent string display |

## License

MIT
