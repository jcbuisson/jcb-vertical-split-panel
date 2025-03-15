
# `jcb-vertical-split-panel` Web Component Documentation

## Description

A custom-element that displays two panels separated by a vertical, mouse-adjustable separation

---

## Attributes

| Attribute          | Type    | Default     | Description                                              |
|--------------------|---------|-------------|----------------------------------------------------------|
| `xxx`              | Number  | `32768`     | XXX                                                      |

---

## CSS Custom Properties

| CSS Property                          | Default    | Description                                              |
|---------------------------------------|------------|----------------------------------------------------------|
| `--jcb-xxx                    `       | `#fcfcfc`  | XXX                                                      |

---

## Events

### `XXX`
- **Description**: Fired when XXX


# Example usage

```
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>jcb-vertical-split-panel</title>
      <script type="module" src="/src/jcb-vertical-split-panel.js"></script>
   </head>
   <body>
      <jcb-vertical-split-panel>
         <div slot="left-panel" class="left">
            <h2>Left Panel</h2>
            <p>This is the left panel content.</p>
         </div>
         <div slot="right-panel" class="right">
            <h1>Right Panel</h1>
            <p>This is the right panel content.</p>
         </div>
      </jcb-vertical-split-panel>
   </body>
</html>

<style>
   body, html {
     margin: 0;
     padding: 0;
     height: 100%;
   }

   .left {
      background-color: #f5f5f5;
      height: 100%;
   }

   .right {
      background-color: #e0e0e0;
      height: 100%;
   }
</style>
```
