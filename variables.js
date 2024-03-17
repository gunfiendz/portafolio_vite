
const handlerBarsContext = {
    "/index.html": {
        "productos": [

        ]
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;