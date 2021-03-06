/**
 * Created by xuhuanhuan on 2017/4/18.
 */

function Graph(v) {       //图类
    this.vertices = v;  //节点数
    this.edges = 0;      //边数
    this.adj=[];         //数组存放顶点数量
    for(var i=0;i<this.vertices;i++){
        this.adj[i] = [];     //子数组存储相邻顶点
    }

    this.addEdge = addEdge;     //添加边
    this.showGraph = showGraph; //显示图
    this.dfs = dfs;        //深度优先搜索
    this.bfs = bfs;       //广度优先搜索
    this.marked = [];     //标志位数组
    for(var i=0;i<this.vertices;i++){  //给所有结点添加未访问过的标识位
        this.marked[i] = false;
    }
}

function addEdge(v,w) {     //添加边
    this.adj[v].push(w);    //将w添加到v的相邻节点列表
    this.adj[w].push(v);    //将v添加到w的相邻节点列表
    this.edges++;
}

function showGraph() {
    for(var i=0;i<this.vertices;i++){  //显示图
        document.write(i+"->");
        for(var j=0;i<this.vertices;j++){  //显示相邻节点
            if(this.adj[i][j]!=undefined){
                document.write(this.adj[i][j]+"");
            }
        }
        document.write("<br>");
    }
}

function dfs(v) {    //深度优先
    this.marked[v] = true;  //将标志位设置为已访问
    if (this.adj[v]!=null){   //如果有相邻节点
        document.write('访问节点：'+v+'<br>');
    }
    var len = this.adj[v].length;
    for(var i=0;i<len;i++){
        var w=this.adj[v];  //将所选节点对应路径一条条搜索下去
        for(var j=0;j<w.length;j++){
            if (!this.marked[w[j]]){     //每个路径一次搜索到底
                this.dfs(w[j]);
            }
        }
    }
}


function bfs(s) {   //广度优先搜索
    for(var i=0;i<this.vertices;i++){  //由于先进行深度优先搜索，所以这里要将标识位重置
        this.marked[i]= false;
    }

    var queue=[];
    this.marked[s]= true;
    queue.push(s);
    while (queue.length>0){
        var v = queue.shift();
        if(v!=undefined){
            document.write("访问节点："+"v"+'<br>');
        }

        for(var i=0;i<this.adj[v].length;i++){
            var w=this.adj[v];  //找到所选节点的相邻子列表
            for(var j=0;j<w.length;j++){
                if (!this.marked[w[j]]){
                    this.marked[w[j]] = true;   //依次访问其相邻子列表
                    queue.push(w[j]);         //将子列表推送入队列
                }
            }
        }
    }
}

g=new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(1);
g.bfs(1);