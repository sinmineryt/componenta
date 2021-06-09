# Componenta
## Introduction
Componenta is an easy to use web-components framework. It does not require any build tools like webpack and runs directly in the browser.
You can use these components directly in HTML. I've made this because I was bored and it may contain some bugs, feel free to commit!

## Using
Use Componenta just by adding the following script tag into your HTML document:
```html
<!-- Minified version -->
<script src="https://cdn.jsdelivr.net/gh/sinmineryt/componenta@1.0/dist/componenta.min.js"></script>
<!-- Unminified version (not recommended) -->
<script src="https://cdn.jsdelivr.net/gh/sinmineryt/componenta@1.0/dist/componenta.js"></script>
```
Or directly fetch from master **(do not use this in production)**
```html
<!-- Minified version -->
<script src="https://cdn.jsdelivr.net/gh/sinmineryt/componenta@master/dist/componenta.min.js"></script>
<!-- Unminified version (not recommended) -->
<script src="https://cdn.jsdelivr.net/gh/sinmineryt/componenta@master/dist/componenta.js"></script>
```

## Configuring
To configure Componenta, add the following code below the script tag in Using:
```html
<script src="https://cdn.jsdelivr.net/gh/sinmineryt/componenta@1.0/dist/componenta.min.js"></script>
<script>
window.Componenta.config = { /* Configuration options here */ };
</script>
```

### Configuration options:
#### `debug`
**Description:** Prints some extra info in the console <br />
**Type:** `boolean | undefined`
**Default:** `false`

## Adding components
Docs in progress

## Example
View an example [here](https://github.com/sinmineryt/componenta/tree/master/example)
