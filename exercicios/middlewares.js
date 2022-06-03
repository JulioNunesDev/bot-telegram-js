const exec = (ctx, ...middlewares)=>{
    const run = index =>{
        middlewares && index < middlewares.length &&
        middlewares[index](ctx, ()=>run(index + 1))
    }
    run(0)
}

const mid1 = (ctx, next)=>{
    ctx.infor1 = 'mid1'
    next()
}

const mid2 = (ctx, next)=>{
    ctx.infor2 = 'mid2'
    next(ctx, next)
}

const mid3 = (ctx)=>{
    ctx.infor3 = 'mid'
}


const ctx= {}
exec(ctx, mid1,mid2,mid3)
console.log(ctx)