l=22;L='length';
j=x=>x.charCodeAt(0)-33;
((s) => {
    t=s.join();
    o=atob(t.substr(l*2));
    b=0,e=0;
    r=(x=>(x[l-1]=0,x))([]).fill(0).map(
        (_, i) => {
        m=j(t[i+l]);
        k=o.substr(b,m);
        if(k[L]<m) {
            d = m-k[L]-3;
            k +='`'+t.substr(e,d)+'`,';
            e += d;
        }
        if(k[L]<m) k+='])';
        console.log(' '.repeat(j(t[i]))+k);
        b+=m;
    });
})([
    `!!!%%%%))))---))))%!%!19*,7)E,-1-.<("4D&$%##bD0yMTtMPSdsZW5ndGgnO2o9eD0+eC5jaGFyQ29kZUF0KDApLTMzOygocykgPT4ge3Q9cy5qb2luKCk7bz1hdG9iKHQuc3Vic3RyKGwqMikpO2I9MCxlPTA7cj0oeD0+KHhbbC0xXT0wLHgpKShbXSkuZmlsbCgwKS5tYXAoKF8sIGkpID0+IHttPWoodFtpK2xdKTtrPW8uc3Vic3RyKGIsbSk7aWYoa1tMXTxtKSB7ZCA9IG0ta1tMXS0zO2sgKz0nYCcrdC5zdWJzdHIoZSxkKSsnYCwnO2UgKz0gZDt9aWYoa1tMXTxtKSBrKz0nXSknO2NvbnNvbGUubG9nKCcgJy5yZXBlYXQoaih0W2ldKSkrayk7Yis9bTt9KTt9KShb`
])