export default {
    input : "./bundle/buildfile.workspace.js",
    output : {
        file  : "./out/workload.main.js",
        format : "amd",
        amd : {
            autoId : true,
            basePath : "sw"
        }
    }
}