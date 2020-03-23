# hv-micro-frontends-spa

## Goal

As a follow up to the work done in **[hv-microfrontends-react](https://github.com/hv-microfrontends/hv-microfrontends-react)**, the main goal of this project is to explore [single-spa](https://single-spa.js.org/) framework in order to create a Micro Frontends application.

### **Dev mode**

```
$ npm i
$ lerna bootstrap
$ npm run dev

Go to - http://localhost:3000 - you'll see links for /people.

Try each link to load each external service.
```

---

## What's missing:
- Independent deliverables/ Local development.
- Code split: load multiple bundles/ chunks for same service. Deal with lazy loading at component or route level.
- How to avoid bundle UI Kit on each service. For now it cannot be an external resource.
- External dependencies with multiple/ different versions.

### References:
- https://single-spa.js.org/docs/recommended-setup/
- https://gitlab.com/TheMcMurder/single-spa-portal-example/-/tree/master/
- https://github.com/react-microfrontends
- https://github.com/joeldenning/import-map-overrides
- https://www.youtube.com/watch?v=wxnwPLLIJCY (single-spa + federated modules)