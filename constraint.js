class constraint{
    constructor(BodyA,pointB){
        var options = {
            bodyA : BodyA,
            pointB : pointB,
            length : 300,
            stiffness : 0.01
        }
        this.constraint = Matter.Constraint.create(options)
        World.add(world,this.constraint)
    }
    Display(){
        var endpoint = this.constraint.pointB
        push()
        
        strokeWeight(3)
        line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,endpoint.x,endpoint.y)
        pop()
    }
}