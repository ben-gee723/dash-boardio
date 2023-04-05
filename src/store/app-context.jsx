// Do I need context/custom context?

import useMyContext from "@ben-gee723/use-context-hook";

const [AppContext, appStore] = useMyContext({
    name: "app",
    init: { search: "" },
    functions: {},
})

export {AppContext, appStore};