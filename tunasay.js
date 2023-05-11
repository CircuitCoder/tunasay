l=22;
j=x=>x.charCodeAt(0)-33;
((s) => {
    t=s.join();
    o=atob(t.substr(l*2));
    b=0,e=0;
    r=(x=>(x[l-1]=0,x))([]).fill(0).map(
        (_, i) => {
        m=j(t[i+l]);
        d=j(t[i+l*2])
        k=o.substr(b,m)+t.substr(e,d);
        if(k.length<m) k+='])';
        console.log(' '.repeat(j(t[i]))+k);
        b+=m;
        e+=d;
    });
})([
])