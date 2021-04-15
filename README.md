**Author:** Matthew Holder
**Version:** 0.1

[PR](https://github.com/holdermatthew5/cookie_stand_admin/pull/1#issue-615550657)

# Cookie Stand Admin

## React I

- [x] `pages/Index.js` should…
- [x] Have `<Head>` component with page title set to Cookie Stand Admin
- [x] Have a header component that matches [spec](https://codefellows.github.io/code-401-python-guide/curriculum/class-37/lab/cookie-stand-admin-version-1.png).
- [x] Have a `<main>` component containing `<form>` and a placeholder component showing JSON string of last created Cookie Stand.
- [x] Have a `<footer>` component that matches spec.
- [x] Style app using TailwindCSS utility classes.

## React II

- [x] `pages/Index.js` should return top level component `<CookieStandAdmin>`
- [x] `<CookieStandAdmin>` details…
    - [x] Have a `<Head>` component.
    - [x] Have a custom `<Header>` component that matches spec.
    - [x] Have a `<main>` component.
        - [x] Within `<main>` have custom `<CreateForm>` and `<ReportTable>` components.
    - [x] Have a custom `<Footer>` component that matches spec.
    - [x] Import time slot data from supplied data.js file.
- [x] `<Head>` should set page title Cookie Stand Admin
- [x] `<Header>` component should have Next `<Link>` to overview page.
- [x] `<CreateForm>` component details…
    - [x] Receive an onCreate function to be called when form is submitted.
    - [x] onCreate should be passed argument object representing new cookie stand.
        - [x] Object should have location property.
        - [x] Object should have hourly_sales property with hard coded [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
- [x] `<ReportTable>` details…
    - [x] should receive hours on props that is an array cookie stand hours of operation.
    - [x] should receive reports on props that is an array all cookie stand objects.
    - [x] If reports is empty then render `<h2>No Cookie Stands Available</h2>`
    - [x] If reports is not empty then render a table with thead,tbody and tfoot components.
    - [x] Component should render to match spec.
    - [x] Component is responsible for tallying totals for each cookie stand as well as all cookie stands per hourly slot.
        ----- FIND A WAY TO ADD THAT TD TO THE END OF THE LIST. HOPEFULLY CLEANLY IN THE `.map` BUT PRIOIRITIZE SPEED
- [x] `<Footer>` component details…
    - [x] Should receive reports array on props.
    - [x] Should display X Locations World Wide where X is number of cookie stands.
- [] `<Header>`,`<Footer>`,`<CreateForm>` and `<ReportTable>` should each be in own file inside top level components folder.
- [] Those components should be imported into Index.js
- [] Overview page details…
- [] should live in pages/overview.js
- [] should render `<Link href="/"><a>Return to Main page</a></Link>`
- [] Style all components using TailwindCSS utility classes to match spec.


<!-- # Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) (v2.1) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)). -->
