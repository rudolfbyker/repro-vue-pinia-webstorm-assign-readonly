# Reproduction for a bug with Vue / Pinia / Webstorm / IDEA

## Steps

- `yarn install`
- `yarn type-check`
- Observe that there are no type errors.
- `yarn dev`
- Click the button.
- Observe that it works in practice.
- Open `App.vue` in Webstorm or IDEA Ultimate.
- Observe error: "Attempt to assign to const or readonly variable"
