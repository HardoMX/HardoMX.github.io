# Unified design language
### Colors
- Background is `--bg`, it is either white or black depending on color scheme
- Text is `--text`, it is either black or white depending on color scheme
- All headers and other "mundane" colored parts should be `--primary`
- All hoverable (except links) elements should be `--secondary` when idle, and `--primary` when hovered
- Any attention-grabbing part should be `--accent`, e.g. active page
- All colors are changed slightly in light-mode to improve looks and match perceived saturation

### Links
- In-line links should have a thin, `--primary` colored, line under them
- When hovered the line should extend uppwards to around halfway up the letters

- Links to projects and the links on the start-page should have `--primary` as background and `--secondary` as header

- Posts-links should be clearly layed out with `DATE`, `CATEGORY`, and `NAME` separated
- It follows inline-link rules, but also moves sideways and up when hovered