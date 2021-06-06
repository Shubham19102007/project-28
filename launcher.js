class launcher{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.pointB= point
        this.launcherObj = Constraint.create(options);
        World.add(world, this.launcherObj);
    }

         fly(){
        this.launcherObj.bodyA = null
    }


    display(){
        if (this.launcherObj.bodyA){
        var pointA = this.launcherObj.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}