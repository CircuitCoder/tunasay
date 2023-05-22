                                             f=s=>{S='*'
                                       ;A=process.argv;E=' ';
                                   R='repeat';Z=E[R](s);N='\n';r=
                                (Z+'f='+f+',f('+N+Z+s+/**/')').split
                              (N);L='length';C='/';[,/*  */,...B]=A;P=(x
                             ,y=80/*****/)=>x.padEnd(y/**/,E);O=console.log
                      /***************/;F=r=>(Z=B.findIndex(j=>j==r)+1,Z&&B
               /*******************/[Z]);u=F('-l');v=u&&parseInt(u);i=(Z=B
            /********************/[0])=='-h'?'[say|- [-c chr] [-l len]]'
         /*********************/:(Z==='-'?require('fs').readFileSync(0,
       /*******************/'utf-8'):Z);j=F('-c')||C;if(i){K=j+j;l=[[
     /*************/   '',0]];for(c of i){h=c!='\n';Z=l[l[L]-1];z=
    /**********/      c.charCodeAt(0)<128?1:2;if(!h||Z[1]+z>(
  /********/          v||40))l.push(Z=['',0]);if(h){Z[0]+=
 /***/       /*******/c;Z[1]+=z;}}M=Math.max;n=v||M(...
 /**/     /**********/l.map(x=>x[1]));r[2]=P(r[2])+j[ /****/
       /****/          R](n+6);s=3;;for([t,u] of l     /***/
                       ) {r[s]=P(r[s])+K+E+t+E[R        /**/
                        ](n-u+1)+K;s++;}r[s]=P          /**/
                         (r[s])+j[R](n+6);T  //
                          UNA=[2023,1];r[s+  //
                           1]=P(r[s+1],78)   //
                             +K;r[s+2]=P(r   //
                               [s+2],76)+K;
                                  }O(r.join(
                                      '\n'+'')
                                          );},f(
                                             45)
