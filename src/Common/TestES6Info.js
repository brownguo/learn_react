class TestES6Info {
    constructor() {
        this.baseInfo = "TESTES6"
        this.prefix_ctx = {
            "headers": "info",
            "body": "body_ctx",
            "Ft_ctx": "ft_ctx"
        }
    }

    getCtx(){
        console.log(123)
        console.log(this.baseInfo)
    }

    getPrefix(){
        console.log(this.prefix_ctx)
    }
}
let start = new TestES6Info()
start.getCtx()
start.getPrefix()